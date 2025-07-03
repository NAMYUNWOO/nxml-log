'use client'

import { useState } from 'react'

export default function DataRecovery() {
  const [showRecovery, setShowRecovery] = useState(false)
  const [recoveryData, setRecoveryData] = useState('')

  const checkLocalStorage = () => {
    const members = localStorage.getItem('nxml-members')
    const attendance = localStorage.getItem('nxml-attendance')
    
    let result = '=== 현재 저장된 데이터 ===\n\n'
    
    if (members) {
      result += '회원 데이터:\n' + members + '\n\n'
    } else {
      result += '회원 데이터: 없음\n\n'
    }
    
    if (attendance) {
      result += '출석 데이터:\n' + attendance
    } else {
      result += '출석 데이터: 없음'
    }
    
    setRecoveryData(result)
  }

  const recoverData = () => {
    try {
      const lines = recoveryData.split('\n')
      let memberData = ''
      let attendanceData = ''
      let currentSection = ''

      for (const line of lines) {
        if (line.includes('회원 데이터:')) {
          currentSection = 'members'
          const data = line.replace('회원 데이터:', '').trim()
          if (data && data !== '없음') {
            memberData = data
          }
        } else if (line.includes('출석 데이터:')) {
          currentSection = 'attendance'
          const data = line.replace('출석 데이터:', '').trim()
          if (data && data !== '없음') {
            attendanceData = data
          }
        } else if (line.trim() && !line.includes('===')) {
          if (currentSection === 'members' && line.trim() !== '없음') {
            memberData = line.trim()
          } else if (currentSection === 'attendance' && line.trim() !== '없음') {
            attendanceData = line.trim()
          }
        }
      }

      if (memberData) {
        try {
          JSON.parse(memberData) // 유효성 검사
          localStorage.setItem('nxml-members', memberData)
          alert('회원 데이터가 복구되었습니다.')
        } catch (e) {
          alert('회원 데이터 형식이 올바르지 않습니다.')
        }
      }

      if (attendanceData) {
        try {
          JSON.parse(attendanceData) // 유효성 검사
          localStorage.setItem('nxml-attendance', attendanceData)
          alert('출석 데이터가 복구되었습니다.')
        } catch (e) {
          alert('출석 데이터 형식이 올바르지 않습니다.')
        }
      }

      window.location.reload()
    } catch (error) {
      alert('데이터 복구 중 오류가 발생했습니다.')
    }
  }

  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={() => setShowRecovery(!showRecovery)}
        className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm"
      >
        데이터 관리
      </button>

      {showRecovery && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <h3 className="text-xl font-bold mb-4">데이터 백업/복구</h3>
            
            <div className="space-y-4">
              <button
                onClick={checkLocalStorage}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                현재 데이터 확인
              </button>

              <textarea
                value={recoveryData}
                onChange={(e) => setRecoveryData(e.target.value)}
                placeholder="복구할 데이터를 여기에 붙여넣으세요..."
                className="w-full h-64 p-3 border border-gray-300 rounded-lg font-mono text-sm"
              />

              <div className="flex gap-2">
                <button
                  onClick={recoverData}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  데이터 복구
                </button>
                <button
                  onClick={() => setShowRecovery(false)}
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                  닫기
                </button>
              </div>

              <div className="text-sm text-gray-600">
                <p>* 현재 데이터 확인: 저장된 데이터를 확인합니다.</p>
                <p>* 데이터 복구: 백업된 데이터를 붙여넣고 복구합니다.</p>
                <p>* 데이터는 JSON 형식이어야 합니다.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}