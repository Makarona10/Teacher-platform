"use client";

import FinishedBadge from "@/components/badges/Finished";
import UpcomingBadge from "@/components/badges/Upcoming";
import AttendanceTable from "@/components/teacher/AttendanceTable";
import UpdateGroupDialog from "@/components/teacher/groups/update/UpdateGroupDialog";
import DeleteGroupConfirm from "@/components/teacher/modals/DeleteGroup";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useParams } from "next/navigation";
import { FaBook, FaMoneyCheckAlt } from "react-icons/fa";
import { MdClass, MdDateRange, MdLocationOn } from "react-icons/md";

const GroupPage = () => {
  const params = useParams();
  const groupId = params.id;

  return (
    <div className="h-full w-full">
      <div className="m-auto py-10 sm:w-[900px] w-full flex flex-col space-y-5 mt-20 sm:px-24 overflow-hidden">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">حساب المثلثات الجزء الثاني</h1>
            <FinishedBadge />
            <UpcomingBadge />
          </div>
          <div className="flex flex-row items-center gap-3">
            <DeleteGroupConfirm />
            <UpdateGroupDialog />
          </div>
        </div>
        <div className="flex flex-col space-y-5 bg-white rounded-lg p-5">
          <div className="flex flex-row items-center justify-between">
            <span className="flex items-center gap-2">
              <MdClass /> الصف الثاني الإعدادي
            </span>
            <span className="text-sm opacity-70">المحاضرة رقم: {3}</span>
          </div>
          <div title="موضوع المحاضرة" className="flex items-center gap-2">
            <FaBook />
            <p> المثلثات الجزء الثاني</p>
          </div>
          <div title="مقع المحاضرة" className="flex items-center text-sm gap-2">
            <MdLocationOn />
            <p>سنتر البتنجانة بجوار مطعم البرجر</p>
          </div>
          <div className="flex flex-row items-center text-xs gap-2">
            <MdDateRange className="text-base" />
            <p>10/6/2024</p>|<p>يوم الإثنين</p>|<p>الساعة 12:00</p>
          </div>
        </div>
        <div className="flex flex-col space-y-5 bg-white rounded-lg p-5">
          <div className="flex items-center gap-2">
            <FaMoneyCheckAlt />
            <p>سعر المحاضرة: {100} جنيه</p>
          </div>
          <div>
            شرح المحاضرة:
            <a
              className="text-sm text-primary underline mr-2"
              href="https://example.com"
              target="_blank"
            >
              https://example.com
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-6 bg-white rounded-lg p-5">
          <div className="flex gap-2 size-24">
            <Image
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
              }
              alt="qr code"
              width={200}
              height={200}
            />
          </div>
          <p className="text-lg font-semibold ">إفحص الكود لتسجيل الحضور</p>
        </div>
        <div>
          <AttendanceTable />
        </div>
      </div>
    </div>
  );
};

export default GroupPage;
