'use client'

import { useState } from 'react'
import MemberList from './components/MemberList'
import AttendanceCheck from './components/AttendanceCheck'
import DataRecovery from './components/DataRecovery'
import CuteCat from './components/CuteCat'

export default function Home() {
  const [activeTab, setActiveTab] = useState<'members' | 'attendance'>('attendance')

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">NXML LOG</h1>
        
        {/* 귀여운 고양이 */}
        <CuteCat />
        
        {/* 탭 네비게이션 */}
        <div className="flex justify-center mb-8 relative z-10">
          <div className="bg-white rounded-lg shadow-sm p-1 inline-flex">
            <button
              onClick={() => setActiveTab('attendance')}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === 'attendance'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              출석체크
            </button>
            <button
              onClick={() => {
                console.log('회원 관리 버튼 클릭됨')
                setActiveTab('members')
              }}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === 'members'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              회원 관리
            </button>
          </div>
        </div>

        {/* 탭 콘텐츠 */}
        {activeTab === 'attendance' ? <AttendanceCheck /> : <MemberList />}
      </div>
      
      {/* 데이터 복구 버튼 */}
      <DataRecovery />
    </main>
  )
}