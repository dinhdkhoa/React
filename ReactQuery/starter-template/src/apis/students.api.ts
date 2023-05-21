import { StudentsList } from 'types/student.type'
import http from 'utils/http'

export const getStudents = (page: number | string, limit: number | string) =>
  http.get<StudentsList>('students', {
    params: {
      _page: page,
      _limit: limit
    }
  })