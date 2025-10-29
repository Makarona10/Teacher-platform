import TeacherNavBar from "@/components/teacher/common/navbar/NavBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="fixed top-5 left-0 right-0 flex justify-center p-3">
        <TeacherNavBar />
      </div>
      {children}
    </div>
  );
}
