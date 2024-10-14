import React from 'react';
import UserInfo from '../../../components/adminComponents/bookingDetailsComponent/UserInfo'
import AppointmentCard from '../../../components/adminComponents/bookingDetailsComponent/AppointmentCard';
import ReviewCard from '../../../components/adminComponents/bookingDetailsComponent/ReviewCard';
import ComplaintCard from '../../../components/adminComponents/bookingDetailsComponent/ComplaintCard';
import StatusDropdowns from '../../../components/adminComponents/bookingDetailsComponent/Statusdropdowns';

const bookingData = {
    user: {
      name: "Karan Hope",
      location: "North Paravoor, Ernakulam",
      bookingId: "12aXZW1",
      title: "Bulb Change",
      description: "Bulb change satisfied sorts of tasks addressed.",
      fromDate: '2024-06-10',
      fromTime: '09:41 AM',
      toDate: '2024-06-10',
      toTime: '09:41 AM',
      images: [
        "https://s3-alpha-sig.figma.com/img/11db/cb98/2f9ba115c7d5cc790cc48a457815fb67?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kV769JKw9fkZFjRaktdH0l3y38yvykReIj6Z7hU8V9g1sZfCkwEty-3bPekA0-f3ZhbPbWCzp5vF4kWRDkphAlO7WGLDuZxVfuMgMUe7NZGeIQ86dp6TXfnO7w5sRgXY4aTKouSZLxvaAvGRQFG2wjZIHbeWUoWkzLbjlcjpgzWmop-f7h-0nG-Vevxeq6w~YRLE-1b9cmvvAICgXkHQfGnNdrnUsZKRirpUhYhSHBtc3kmgjBBfh25439PnwM23r09uJXJNxqmiDptS6JVaK9VsZhpESnWny8N~kanpyoJJWJ84edO7F5FZDr0vnccff10~1lZHVmHLiuEUffneaw__",
        "https://s3-alpha-sig.figma.com/img/11db/cb98/2f9ba115c7d5cc790cc48a457815fb67?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kV769JKw9fkZFjRaktdH0l3y38yvykReIj6Z7hU8V9g1sZfCkwEty-3bPekA0-f3ZhbPbWCzp5vF4kWRDkphAlO7WGLDuZxVfuMgMUe7NZGeIQ86dp6TXfnO7w5sRgXY4aTKouSZLxvaAvGRQFG2wjZIHbeWUoWkzLbjlcjpgzWmop-f7h-0nG-Vevxeq6w~YRLE-1b9cmvvAICgXkHQfGnNdrnUsZKRirpUhYhSHBtc3kmgjBBfh25439PnwM23r09uJXJNxqmiDptS6JVaK9VsZhpESnWny8N~kanpyoJJWJ84edO7F5FZDr0vnccff10~1lZHVmHLiuEUffneaw__",
        "https://s3-alpha-sig.figma.com/img/11db/cb98/2f9ba115c7d5cc790cc48a457815fb67?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kV769JKw9fkZFjRaktdH0l3y38yvykReIj6Z7hU8V9g1sZfCkwEty-3bPekA0-f3ZhbPbWCzp5vF4kWRDkphAlO7WGLDuZxVfuMgMUe7NZGeIQ86dp6TXfnO7w5sRgXY4aTKouSZLxvaAvGRQFG2wjZIHbeWUoWkzLbjlcjpgzWmop-f7h-0nG-Vevxeq6w~YRLE-1b9cmvvAICgXkHQfGnNdrnUsZKRirpUhYhSHBtc3kmgjBBfh25439PnwM23r09uJXJNxqmiDptS6JVaK9VsZhpESnWny8N~kanpyoJJWJ84edO7F5FZDr0vnccff10~1lZHVmHLiuEUffneaw__"
      ],
      profileImage: "https://s3-alpha-sig.figma.com/img/b1fb/7717/906c952085307b6af6e1051a901bdb02?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p8B2FXUL7JfR700lMyncCTYW~~T12uzICdxGkKjesNyicvABAeJziXjz2hQQc-lesGYYCOGznGEnVaTWJPOUXSFPzeQFjwEEp3JBBnvbtIpAzQ~jIunegvSzkYUT1HFHZGdykdrEGBwArqIRFWls8lnCoXr-jv93ZSax35FUVfJJGntRph-q1NdLfWKlvDQgStSo~nI2OtahiGK4Rv6m7LHlsy5-q7IdNHJDK-igDL9V99XRIFt1FN7O6SX9JtUDtTo3uuq9-XEoVPzCWo~F3Lcl5PULpbXXryWC9H6LT5WGb8KSYqACvjJcLOr5ytlG7QCWl2d8xP7P3QK-Ehpw4Q__" // User profile image URL
    },
    franchise: {
      name: "Nazrul Islam",
      category: "Electrification",
      type:"Franchise: SNS",
      invoice: "S10",
      description: "Bulb Change",
      qty: 1,
      price: 300,
      total: 300,
      terms: "Valid up to 1 month",
      additionalRequirements: "Provide Ladder",
      profileImage: "https://s3-alpha-sig.figma.com/img/b1fb/7717/906c952085307b6af6e1051a901bdb02?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p8B2FXUL7JfR700lMyncCTYW~~T12uzICdxGkKjesNyicvABAeJziXjz2hQQc-lesGYYCOGznGEnVaTWJPOUXSFPzeQFjwEEp3JBBnvbtIpAzQ~jIunegvSzkYUT1HFHZGdykdrEGBwArqIRFWls8lnCoXr-jv93ZSax35FUVfJJGntRph-q1NdLfWKlvDQgStSo~nI2OtahiGK4Rv6m7LHlsy5-q7IdNHJDK-igDL9V99XRIFt1FN7O6SX9JtUDtTo3uuq9-XEoVPzCWo~F3Lcl5PULpbXXryWC9H6LT5WGb8KSYqACvjJcLOr5ytlG7QCWl2d8xP7P3QK-Ehpw4Q__" // Franchise profile image URL
    },
    review: {
      reviewer: "Heather S. McMullen",
      rating: 4.2,
      content: "The course is very good, Lorem ipsum dolor sit amet...",
      profileImage: "profile-image.jpg"
    },
    complaint: {
      title: "2 Weeks Ago",
      content: "The course is very good, Lorem ipsum dolor sit amet...",
      images: ["complaint-image1.jpg", "complaint-image2.jpg"]
    }
      
};

const BookingDetailsPage = () => {
  return (
    <div className="ml-6 mr-8 container  bg-white border rounded-lg  p-6  w-[1000px] h-vh">
      <div className="ml-3 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <UserInfo user={bookingData.user} />
        </div>
        <div>
          <AppointmentCard franchise={bookingData.franchise}  user={bookingData.user} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="ml-24 mt-8">
        <ReviewCard review={bookingData.review} user={bookingData.user} />
        </div>
        <div className='ml-20'>
        <ComplaintCard complaint={bookingData.complaint} user={bookingData.user} />
      </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className='ml-24 mt-8'>
        <ComplaintCard complaint={bookingData.complaint} user={bookingData.user} />
      </div>
      <div className="mt-8">
        <StatusDropdowns />
      </div>
      </div>
    </div>
  );
};

export default BookingDetailsPage;
