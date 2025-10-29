import InputWithButton from "@/components/common/search";

export default function TeacherDashboard() {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="sm:w-3/4 w-11/12 flex justify-center mt-30">
        <div className="flex gap-3 items-center flex-wrap">
          <InputWithButton placeholder="إبحث عن مجموعة..." />
        </div>
      </div>
    </div>
  );
}
