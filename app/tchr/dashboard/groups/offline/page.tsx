import InputWithButton from "@/components/common/search";
import ClassFilter from "@/components/teacher/groups/filter/Class";
import CalendarPicker from "@/components/teacher/groups/filter/datePicker";
import DayFilter from "@/components/teacher/groups/filter/DayFilter";
import GroupCard from "@/components/teacher/groups/GroupCard";

export default function OfflineGroupsPage() {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="sm:w-3/4 w-11/12 flex justify-center mt-30">
        <div className="w-full flex flex-col space-y-4 items-center justify-center flex-wrap">
          <div className="flex items-center gap-2">
            <DayFilter />
            <ClassFilter />
            <CalendarPicker title={"من"} paramName="from" />
            <CalendarPicker title={"إلى"} paramName="to" />
          </div>
          <InputWithButton placeholder="إبحث عن مجموعة..." />
        </div>
      </div>
      <div className="flex flex-col items-center w-full h-full mt-16">
        <GroupCard
          id="1"
          price={100}
          number={1}
          name="مجموعة رقم 1"
          date="الاثنين 1 مارس 2023"
          time="8:00 صباحا"
          location="مبنى المدرسة"
          // status="مضت"
          status="قادمة"
        />
      </div>
    </div>
  );
}
