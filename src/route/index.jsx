import Dashboard from "../application/Dashboard";
import Student from "../application/Student";

export const routes = [
    { path: "/app/dashboard", Component: Dashboard },
    { path: "/app/manage/student", Component: Student },
];
