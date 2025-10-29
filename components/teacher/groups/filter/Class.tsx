"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const classes = [
  { label: "أولى ثانوي", value: "stSec" },
  { label: "ثانية ثانوي", value: "ndSec" },
  { label: "ثالثة ثانوي", value: "rdSec" },
];

const ClassFilter = () => {
  const [selectedClass, setSelectedClass] = React.useState<string>("saturday");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const params = new URLSearchParams(searchParams.toString());
  params.set("class", selectedClass ? selectedClass : "");
  const url = `${pathName}?${params.toString()}`;

  React.useEffect(() => {
    if (selectedClass) {
      router.push(url);
    }
  }, [router, selectedClass, url]);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          الصف
          <ChevronDownIcon />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        {classes.map((_class) => (
          <DropdownMenuCheckboxItem
            key={_class.value}
            checked={selectedClass === _class.value}
            onCheckedChange={() => setSelectedClass(_class.value)}
            className="flex justify-between"
          >
            <span>{_class.label}</span>
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ClassFilter;
