import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

interface Student {
  id: number;
  name: string;
  status: string;
  record: string;
  degree: string | null;
}

const AttendanceTable = ({ students }: { students: Student[] }) => {
  return (
    <Table dir="rtl" className="bg-white rounded-lg">
      <TableCaption>جدول الحضور الخاص بالمجموعة</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>الإسم</TableHead>
          <TableHead>حالة الحضور</TableHead>
          <TableHead>درجة الاختبار</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: 5 }).map((_, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">
              {" "}
              {index + 1}. سيد الحسين
            </TableCell>
            <TableCell>
              <Button variant={"default"} className="font-normal text-sm p-1">
                سجل حضور
              </Button>
            </TableCell>
            <TableCell className="text-right">14/15</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AttendanceTable;
