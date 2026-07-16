import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listStudent: [],
  studentEdit: null,
  keyword: "",
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.listStudent.push(action.payload);
    },
    deleteStudent: (state, action) => {
      const msv = action.payload;

      state.listStudent = state.listStudent.filter(
        (student) => student.msv !== msv,
      );
    },
    editStudent: (state, action) => {
      const msv = action.payload;
      state.studentEdit = state.listStudent.find((item) => item.msv === msv);
      console.log(state.studentEdit);
      console.log(action.payload);
    },
    updateStudent: (state, action) => {
      const index = state.listStudent.findIndex(
        (s) => s.msv === action.payload.msv,
      );
      if (index !== -1) {
        state.listStudent[index] = action.payload; // Ghi đè dữ liệu mới
      }
    },
    searchStudent: (state, action) => {
      state.keyword = action.payload;
    },
  },
});

export const {
  addStudent,
  deleteStudent,
  editStudent,
  updateStudent,
  searchStudent,
} = studentSlice.actions;
export default studentSlice.reducer;
