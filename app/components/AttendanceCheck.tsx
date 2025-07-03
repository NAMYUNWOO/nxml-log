'use client'

import { useState, useEffect } from 'react'

interface Member {
  id: string
  name: string
  joinedAt: string
}

interface AttendanceRecord {
  memberId: string
  memberName: string
  date: string
  timestamp: string
}

export default function AttendanceCheck() {
  const [members, setMembers] = useState<Member[]>([])
  const [todayAttendance, setTodayAttendance] = useState<AttendanceRecord[]>([])
  const [selectedMemberId, setSelectedMemberId] = useState<string>('')

  useEffect(() => {
    // 회원 목록 불러오기
    const savedMembers = localStorage.getItem('nxml-members')
    if (savedMembers) {
      setMembers(JSON.parse(savedMembers))
    }

    // 오늘 출석 기록 불러오기
    loadTodayAttendance()
  }, [])

  const loadTodayAttendance = () => {
    const attendance = JSON.parse(localStorage.getItem('nxml-attendance') || '[]')
    const today = new Date().toLocaleDateString('ko-KR')
    const todayRecords = attendance.filter((record: AttendanceRecord) => record.date === today)
    setTodayAttendance(todayRecords)
  }

  const handleAttendanceCheck = () => {
    if (!selectedMemberId) {
      alert('회원을 선택해주세요.')
      return
    }

    const member = members.find(m => m.id === selectedMemberId)
    if (!member) return

    // 이미 오늘 출석했는지 확인
    const today = new Date().toLocaleDateString('ko-KR')
    const alreadyChecked = todayAttendance.some(
      record => record.memberId === selectedMemberId && record.date === today
    )

    if (alreadyChecked) {
      alert('이미 오늘 출석체크를 하셨습니다.')
      return
    }

    // 출석 기록 추가
    const newRecord: AttendanceRecord = {
      memberId: selectedMemberId,
      memberName: member.name,
      date: today,
      timestamp: new Date().toLocaleString('ko-KR')
    }

    const allAttendance = JSON.parse(localStorage.getItem('nxml-attendance') || '[]')
    allAttendance.push(newRecord)
    localStorage.setItem('nxml-attendance', JSON.stringify(allAttendance))

    // 오늘 출석 목록 업데이트
    setTodayAttendance([...todayAttendance, newRecord])
    setSelectedMemberId('')
    alert(`${member.name}님 출석체크 완료!`)
  }

  // 회원별 총 출석 횟수 계산
  const getAttendanceCount = (memberId: string) => {
    const allAttendance = JSON.parse(localStorage.getItem('nxml-attendance') || '[]')
    return allAttendance.filter((record: AttendanceRecord) => record.memberId === memberId).length
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* 출석체크 섹션 */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">출석체크</h2>
        <div className="flex gap-3">
          <select
            value={selectedMemberId}
            onChange={(e) => setSelectedMemberId(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">회원을 선택하세요</option>
            {members.map((member) => (
              <option key={member.id} value={member.id}>
                {member.name}
              </option>
            ))}
          </select>
          <button
            onClick={handleAttendanceCheck}
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            출석체크
          </button>
        </div>
      </div>

      {/* 오늘 출석 현황 */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">
          오늘 출석 현황 ({new Date().toLocaleDateString('ko-KR')})
        </h3>
        <div className="text-sm text-gray-600 mb-4">
          출석: {todayAttendance.length}명 / 전체: {members.length}명
        </div>
        {todayAttendance.length === 0 ? (
          <p className="text-gray-500">아직 출석한 회원이 없습니다.</p>
        ) : (
          <div className="space-y-2">
            {todayAttendance.map((record, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                <span className="font-medium">{record.memberName}</span>
                <span className="text-sm text-gray-500">{record.timestamp}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 전체 출석 통계 */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">전체 출석 통계</h3>
        <div className="space-y-2">
          {members.map((member) => {
            const count = getAttendanceCount(member.id)
            return (
              <div key={member.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                <span className="font-medium">{member.name}</span>
                <span className="text-sm">총 {count}회 출석</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}