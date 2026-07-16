import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateStudent } from "../slide";
export default function StudentModal({ open, onClose }) {
  const studentEdit = useSelector((state) => state.studentReducer.studentEdit);
  const dispatch = useDispatch();
  const [user, setUser] = useState({ msv: "", tenSv: "", sdt: "", email: "" });

  useEffect(() => {
    if (studentEdit) {
      setUser(studentEdit);
    }
  }, [studentEdit]);

  if (!open) return null;

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSave = () => {
    dispatch(updateStudent(user));
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="w-[500px] bg-white rounded-lg shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center border-b px-5 py-3">
          <h2 className="text-xl font-semibold">Thông tin sinh viên</h2>

          <button onClick={onClose} className="text-2xl hover:text-red-500">
            ×
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">
              Mã sinh viên
            </label>
            <input
              disabled
              type="text"
              name="msv"
              value={user.msv || ""}
              onChange={handleOnChange}
              className="w-full border rounded p-2 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Họ tên</label>
            <input
              type="text"
              name="tenSv"
              value={user.tenSv || ""}
              onChange={handleOnChange}
              className="w-full border rounded p-2 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={user.email || ""}
              onChange={handleOnChange}
              className="w-full border rounded p-2 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Số điện thoại
            </label>
            <input
              type="number"
              name="sdt"
              value={user.sdt || ""}
              onChange={handleOnChange}
              className="w-full border rounded p-2 outline-none"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t px-5 py-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded hover:bg-gray-50"
          >
            Hủy
          </button>

          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
}
