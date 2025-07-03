'use client'

import { useState, useEffect } from 'react'

interface Member {
  id: string
  name: string
  joinedAt: string
}

export default function MemberList() {
  const [members, setMembers] = useState<Member[]>([])
  const [newMemberName, setNewMemberName] = useState('')

  useEffect(() => {
    const savedMembers = localStorage.getItem('nxml-members')
    if (savedMembers) {
      setMembers(JSON.parse(savedMembers))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('nxml-members', JSON.stringify(members))
  }, [members])

  const addMember = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMemberName.trim()) {
      const newMember: Member = {
        id: Date.now().toString(),
        name: newMemberName.trim(),
        joinedAt: new Date().toLocaleDateString('ko-KR')
      }
      setMembers([...members, newMember])
      setNewMemberName('')
    }
  }

  const removeMember = (id: string) => {
    const updatedMembers = members.filter(member => member.id !== id)
    setMembers(updatedMembers)
    if (updatedMembers.length === 0) {
      localStorage.setItem('nxml-members', '[]')
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">동호회원 명단</h2>
      
      <form onSubmit={addMember} className="mb-8">
        <div className="flex gap-2">
          <input
            type="text"
            value={newMemberName}
            onChange={(e) => setNewMemberName(e.target.value)}
            placeholder="회원 이름을 입력하세요"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            추가
          </button>
        </div>
      </form>

      <div className="space-y-2">
        {members.length === 0 ? (
          <p className="text-gray-500 text-center py-8">등록된 회원이 없습니다.</p>
        ) : (
          members.map((member) => (
            <div
              key={member.id}
              className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-500">가입일: {member.joinedAt}</p>
              </div>
              <button
                onClick={() => removeMember(member.id)}
                className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors"
              >
                삭제
              </button>
            </div>
          ))
        )}
      </div>

      <div className="mt-6 text-sm text-gray-600">
        총 회원 수: {members.length}명
      </div>
    </div>
  )
}