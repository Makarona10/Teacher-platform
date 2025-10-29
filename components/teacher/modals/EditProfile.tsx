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
import { Textarea } from "@/components/ui/textarea";

const EditProfileDialog = () => {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant={"default"}>تعديل الملف الشخصي</Button>
        </DialogTrigger>
        <DialogContent className="sm:w-[800px] w-11/12">
          <DialogHeader>
            <DialogTitle>تحديث المجموعة</DialogTitle>
            <DialogDescription>
              تحديث المعلومات الخاصة بالمجموعة
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name">نبذة عن المدرس</Label>
              <Input id="name" name="name" defaultValue="الإسم الحالي" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="topic">نبذة عن المدرس</Label>
              <Textarea id="desc" name="desc" defaultValue="الوصف السابق" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="facebook">رابط الفيسبوك</Label>
              <Input
                type="url"
                id="facebook"
                name="facebook"
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

export default EditProfileDialog;
