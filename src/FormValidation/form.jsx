import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudent } from "../slide";
export default function Form() {
  // const studentEdit = useSelector((state) => state.studentReducer.studentEdit);
  // console.log("studentEdit:", studentEdit);
  // useEffect(() => {
  //   if (studentEdit) {
  //     setUser(studentEdit);
  //   }
  // }, [studentEdit]);
  const dispatch = useDispatch();
  const [user, setUser] = useState({ msv: "", tenSv: "", sdt: "", email: "" });
  const [validation, setValidation] = useState({
    msv: "",
    tenSv: "",
    sdt: "",
    email: "",
  });
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(addStudent(user));

    setUser({
      msv: "",
      tenSv: "",
      sdt: "",
      email: "",
    });

    setValidation({
      msv: "",
      tenSv: "",
      sdt: "",
      email: "",
    });
  };
  const handleValidation = (event) => {
    const { name, value } = event.target;
    let mess = "";
    if (value.trim() === "") {
      mess = `Vui Lòng Nhập ${name}`;
    }
    setValidation({
      ...validation,
      [name]: mess,
    });
  };
  const render = (content) => {
    return (
      <div
        className="p-4 mb-4 text-sm text-fg-danger-strong rounded-base bg-danger-soft"
        role="alert"
      >
        {content}
      </div>
    );
  };
  const disabled = !user.msv || !user.sdt || !user.tenSv || !user.email;

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
        <h2 className="text-2xl font-bold text-white">
          📚 Thông tin sinh viên
        </h2>
      </div>

      <form onSubmit={handleLogin}>
        <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Mã sinh viên
            </label>
            <input
              value={user.msv}
              onChange={handleOnChange}
              onBlur={handleValidation}
              name="msv"
              type="text"
              placeholder="Nhập mã sinh viên"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
            {validation.msv && render(validation.msv)}
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Họ và tên
            </label>
            <input
              value={user.tenSv}
              onChange={handleOnChange}
              onBlur={handleValidation}
              name="tenSv"
              type="text"
              placeholder="Nhập họ tên"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
            {validation.tenSv && render(validation.tenSv)}
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Số điện thoại
            </label>
            <input
              value={user.sdt}
              onChange={handleOnChange}
              onBlur={handleValidation}
              name="sdt"
              type="number"
              placeholder="Nhập số điện thoại"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
            {validation.sdt && render(validation.sdt)}
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Email
            </label>
            <input
              value={user.email}
              onChange={handleOnChange}
              onBlur={handleValidation}
              name="email"
              type="email"
              placeholder="Nhập email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
            {validation.email && render(validation.email)}
          </div>

          <div className="md:col-span-2 flex justify-end">
            <button
              disabled={disabled}
              type="submit"
              className="disabled:bg-gray-300 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow transition hover:bg-blue-700 hover:shadow-lg"
            >
              Thêm sinh viên
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
