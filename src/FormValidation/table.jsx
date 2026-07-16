import { useSelector, useDispatch } from "react-redux";
import { deleteStudent, editStudent } from "../slide";

export default function Table({ setOpen }) {
  const listStudent = useSelector((state) => state.studentReducer.listStudent);
  const keyword = useSelector((state) => state.studentReducer.keyword);
  const dispatch = useDispatch();
  const filterStudent = listStudent.filter((student) => {
    return (
      student.msv.toString().includes(keyword) ||
      student.tenSv.toLowerCase().includes(keyword.toLowerCase())
    );
  });
  return (
    <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-lg">
      <div className="bg-slate-800 px-6 py-4">
        <h2 className="text-xl font-bold text-white">📋 Danh sách sinh viên</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-100">
            <tr className="text-left text-sm uppercase text-gray-600">
              <th className="px-6 py-4">Mã SV</th>
              <th className="px-6 py-4">Họ tên</th>
              <th className="px-6 py-4">Số điện thoại</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4 text-center">Thao tác</th>
            </tr>
          </thead>

          <tbody>
            {filterStudent.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-6 text-center text-gray-500">
                  Không tìm thấy sinh viên
                </td>
              </tr>
            ) : (
              filterStudent.map((student) => (
                <tr key={student.msv} className="border-t hover:bg-slate-50">
                  <td className="px-6 py-4">{student.msv}</td>
                  <td className="px-6 py-4 font-medium">{student.tenSv}</td>
                  <td className="px-6 py-4">{student.sdt}</td>
                  <td className="px-6 py-4">{student.email}</td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => {
                        dispatch(editStudent(student.msv));
                        setOpen(true);
                      }}
                      className="mr-2 rounded-lg bg-yellow-400 px-4 py-2 text-sm font-medium text-white hover:bg-yellow-500"
                    >
                      Sửa
                    </button>

                    <button
                      onClick={() => dispatch(deleteStudent(student.msv))}
                      className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
