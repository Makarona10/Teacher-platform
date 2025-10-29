import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const DeleteGroupConfirm = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"destructive"}>حذف</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>حذف المجموعة</DialogTitle>
          <DialogDescription>هل تريد حذف المجموعة؟</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant={"destructive"}>نعم</Button>
          <DialogClose asChild>
            <Button variant={"outline"}>لا</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteGroupConfirm;
