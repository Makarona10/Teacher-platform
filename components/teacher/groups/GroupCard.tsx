import Link from "next/link";
import { MdDateRange } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { FaBuilding, FaMoneyCheckAlt } from "react-icons/fa";
import UpcomingBadge from "@/components/badges/Upcoming";

interface GroupCardProps {
  name: string;
  date: string;
  time: string;
  location: string;
  status: "قادمة" | "مضت";
  id: string;
  number: number;
  price: number;
}

const GroupCard = ({
  name,
  date,
  time,
  location,
  status,
  id,
  number,
  price,
}: GroupCardProps) => {
  return (
    <Link
      href={"/tchr/dashboard/group/" + id}
      className="flex justify-between sm:w-[650px] w-11/12 border-2 border-primary/50 p-2 px-5 rounded-xl transition duration-300 hover:shadow-[0_0_10px] shadow-primary/70"
    >
      <div className="flex flex-col items-start">
        <div className="flex gap-1 items-center">
          <GrGroup />
          <h1 className="font-semibold text-xl">{name}</h1>
        </div>
        <h3 className="text-sm mt-3"> # المحاضرة رقم: {number}</h3>
        <div className="flex items-center gap-1">
          <FaMoneyCheckAlt />
          <h4 className="text-sm">سعر المحاضرة: {price} جنيه</h4>
        </div>
      </div>
      <div className="flex flex-col items-end ">
        <div className="flex gap-1 items-center">
          <MdDateRange />
          <p className="text-sm">{date}</p>
        </div>

        <p className="text-xs opacity-70">{time}</p>
        <div className="flex gap-1 items-center mt-3">
          <FaBuilding />
          <p className="text-xs opacity-70">{location}</p>
        </div>
        <div className="mt-2">
          <UpcomingBadge />
        </div>
      </div>
    </Link>
  );
};

export default GroupCard;
