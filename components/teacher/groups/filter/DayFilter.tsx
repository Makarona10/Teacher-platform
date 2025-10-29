"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const days = [
  { label: "السبت", value: "saturday" },
  { label: "الأحد", value: "sunday" },
  { label: "الاثنين", value: "monday" },
  { label: "الثلاثاء", value: "tuesday" },
  { label: "الأربعاء", value: "wednesday" },
  { label: "الخميس", value: "thursday" },
  { label: "الجمعة", value: "friday" },
];

const DayFilter = () => {
  const [selectedDay, setSelectedDay] = React.useState<string>("saturday");
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();
  const params = new URLSearchParams(searchParams.toString());
  params.set("day", selectedDay ? selectedDay : "");
  const url = `${pathName}?${params.toString()}`;

  React.useEffect(() => {
    if (selectedDay) {
      router.push(url);
    }
  }, [router, selectedDay, url]);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          يوم المجموعة
          <ChevronDownIcon />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        {days.map((day) => (
          <DropdownMenuCheckboxItem
            key={day.value}
            checked={selectedDay === day.value}
            onCheckedChange={() => setSelectedDay(day.value)}
            className="flex justify-between"
          >
            <span>{day.label}</span>
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DayFilter;
