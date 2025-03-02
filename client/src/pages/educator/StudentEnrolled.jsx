import React, { useContext, useEffect, useState } from 'react'
import { dummyStudentEnrolled } from '../../assets/assets'
import Loading from '../../components/student/Loading'
import { AppContext } from '../../context/AppContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const StudentEnrolled = () => {

  const { isEducator, backendUrl, getToken } = useContext(AppContext)

  const [enrolledStudents, setEnrolledStudents] = useState(null)

  const fetchEnrollesStudents = async () => {
    try {
      const token = await getToken()

      const { data } = await axios.get(backendUrl + "/api/educator/enrolled-students", { headers: { 
        Authorization: `Bearer ${token}` } })

      if (data.success) {
        setEnrolledStudents(data.enrolledStudents.reverse())
      } else {
        toast.error(error.message)
      }
      
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (isEducator) {
      fetchEnrollesStudents()
    }
    
  },[isEducator])

  return enrolledStudents ?  (
    <div className='min-h-screen flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0'>
      <div className='flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20'>
        {/* <h2>Enrolled Students</h2> */}
        <table className='table-fixed md:table-auto w-full overflow-hidden pb-4'>
          <thead className='text-gray-900 border-b text-sm text-left border-gray-500/20'>
            <tr>
              <th className='px-4 py-3 font-semibold'>#</th>
              <th className='px-4 py-3 font-semibold'>Student Name</th>
              <th className='px-4 py-3 font-semibold'>Course Title</th>
              <th className='px-4 py-3 font-semibold'>Date</th>
            </tr>
          </thead>
          <tbody className='text-sm text-gray-500'>
            {enrolledStudents.map((item, index) => (
              <tr key={index} className='border-b border-gray-500/20'>
                <td className='px-4 py-3 text-center hidden sm:table-cell'>{index+1}</td>
                <td className='px-2 md:px-4 py-3 flex items-center space-x-3'>
                  <img src={item.student.imageUrl} alt="" className='w-9 h-9 rounded-full' />
                  <span className='truncate'>{item.student.name}</span>
                </td>
                <td className='px-4 py-3 truncate'>{item.courseTitle }</td>
                <td className='px-4 py-3 hidden sm:table-cell'>{new Date(item.purchaseDate).toLocaleDateString() }</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ): <Loading />
}

export default StudentEnrolled
