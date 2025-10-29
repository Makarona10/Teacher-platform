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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const UpdateGroupDialog = () => {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant={"default"}>تحديث</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>تحديث المجموعة</DialogTitle>
            <DialogDescription>
              تحديث المعلومات الخاصة بالمجموعة
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">إسم المجموعة</Label>
              <Input
                id="name-1"
                name="name"
                defaultValue="الإسم المتواجد حاليا"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="topice"> موضوع الدرس</Label>
              <Input
                id="topic"
                name="topic"
                defaultValue="الدرس المتواجد مسبقا"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="price">سعر الحصة</Label>
              <Input
                id="price"
                name="price"
                type="number"
                defaultValue="السعر المسبق"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="slides-link">رابط الشرح</Label>
              <Input
                type="url"
                id="slides-link"
                name="slides-link"
                defaultValue="الرابط المتواجد مسبقا"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">إلغاء</Button>
            </DialogClose>
            <Button type="submit">حفظ التغييرات</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default UpdateGroupDialog;
