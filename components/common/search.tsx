import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchProps {
  placeholder: string;
}

const InputWithButton = ({ placeholder }: SearchProps) => {
  return (
    <div className="flex w-full max-w-sm items-center gap-2">
      <Input type="text" placeholder={placeholder} />
      <Button type="submit" variant="default">
        بحث
      </Button>
    </div>
  );
};

export default InputWithButton;
