"use client";

import { FaFacebook, FaWhatsapp, FaTelegram } from "react-icons/fa";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import EditProfileDialog from "@/components/teacher/modals/EditProfile";

const TeacherProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Header Section */}
      <div className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 h-48 relative">
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
          <Image
            src="https://media0087.elcinema.com/uploads/_640x480_31e78e8231c208b135b6033b237b1c19664688cc11bcd802905d4bbdad82f1a3.jpg"
            alt="Teacher photo"
            width={120}
            height={120}
            className="w-40 h-40 rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>

      {/* Main Section */}
      <div className="w-full max-w-3xl mt-24 bg-white rounded-2xl shadow-md p-8 space-y-6">
        {/* Teacher Name */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            أ/ محمد عبد الرحمن
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            مدرس رياضيات للمرحلة الإعدادية
          </p>
          <div className="mt-2">
            <EditProfileDialog />
          </div>
        </div>

        {/* About */}
        <div>
          <h2 className="text-lg font-semibold mb-2">نبذة عني</h2>
          <p className="text-gray-600 leading-relaxed">
            مدرس متخصص في الرياضيات منذ أكثر من 10 سنوات، أساعد الطلاب على فهم
            المادة بأسلوب مبسط مع تطبيقات عملية وتمارين تفاعلية.
          </p>
        </div>

        {/* Subjects */}
        <div>
          <h2 className="text-lg font-semibold mb-2">المواد والصفوف</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
              الصف الثاني الإعدادي
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
              الصف الثالث الإعدادي
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
              هندسة
            </span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">
              جبر
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-xl font-bold text-indigo-600">120</p>
            <p className="text-gray-500 text-sm">طالب</p>
          </div>
          <div>
            <p className="text-xl font-bold text-indigo-600">45</p>
            <p className="text-gray-500 text-sm">محاضرة</p>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-lg font-semibold mb-2">روابط التواصل</h2>
          <div className="flex gap-4">
            <a href="#" className="text-blue-600 hover:text-blue-800 text-xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-green-600 hover:text-green-800 text-xl">
              <FaWhatsapp />
            </a>
            <a href="#" className="text-sky-500 hover:text-sky-700 text-xl">
              <FaTelegram />
            </a>
          </div>
        </div>
        <div className="my-5 px-5 h-0.5 w-full bg-gray-300" />
        <div>
          <Link
            href="/tchr/dashboard/groups/offline"
            className="text-blue-600 hover:text-blue-800 text-xl"
          >
            <Button variant={"link"}>الذهاب إلى المحاضرات الأوفلاين</Button>
          </Link>
          <Link
            href="/tchr/dashboard/groups/offline"
            className="text-blue-600 hover:text-blue-800 text-xl"
          >
            <Button variant={"link"}>الذهاب إلى المحاضرات الأونلاين</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfilePage;
