import { useDispatch, useSelector } from "react-redux";
import { searchStudent } from "../slide";

export default function Search() {
  const dispatch = useDispatch();
  const keyword = useSelector((state) => state.studentReducer.keyword);

  return (
    <div className="mb-6">
      <label className="mb-2 block text-sm font-semibold text-gray-700">
        🔍 Tìm kiếm sinh viên
      </label>

      <input
        type="text"
        placeholder="Nhập mã sinh viên hoặc họ tên..."
        value={keyword}
        onChange={(key) => dispatch(searchStudent(key.target.value))}
        className="w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
    </div>
  );
}
