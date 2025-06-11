// import CardYT from "../CardYT";
// import Marquee from "react-fast-marquee";

// export const Testimonial = () => {
//   const testimonials = [
//     {
//       image:
//         "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=600",
//       name: "Jane Doe",
//       role: "CEO, Tech Innovations",
//       text: "Our team has been searching for a solution that could streamline our complex workflow. The intuitive design and powerful features have significantly increased our productivity and collaboration.",
//     },
//     {
//       image:
//         "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=600",
//       name: "John Smith",
//       role: "Lead Software Developer",
//       text: "As a developer who has worked with countless tools, I can confidently say this product stands out in solving real-world challenges. Its seamless integration and robust architecture make it a game-changer.",
//     },
//     {
//       image:
//         "https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       name: "Emily Rodriguez",
//       role: "Product Manager",
//       text: "What sets this product apart is its incredible adaptability and user-centric design. We've implemented it across multiple departments with remarkable results.",
//     },
//     {
//       image:
//         "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       name: "Michael Chang",
//       role: "Innovation Strategist",
//       text: "In the fast-paced world of technology, finding a solution that is both cutting-edge and reliable is rare. This product bridges that gap perfectly.",
//     },
//     {
//       image:
//         "https://images.pexels.com/photos/3775534/pexels-photo-3775534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       name: "Sarah Johnson",
//       role: "Marketing Director",
//       text: "The analytics and reporting features have transformed our marketing strategy. We now make data-driven decisions with unprecedented clarity and confidence.",
//     },
//     {
//       image:
//         "https://images.pexels.com/photos/4353618/pexels-photo-4353618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       name: "David Kim",
//       role: "Startup Founder",
//       text: "As a startup founder, I needed a tool that could scale with our growth. This solution has been instrumental in our rapid expansion, providing the flexibility we needed.",
//     },
//     {
//       image:
//         "https://images.pexels.com/photos/2292837/pexels-photo-2292837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       name: "Olivia Martinez",
//       role: "Education Technology Specialist",
//       text: "The platform's collaborative features have revolutionized how our educational teams work together. It's like having a virtual workspace that understands our unique challenges.",
//     },
//     {
//       image:
//         "https://images.pexels.com/photos/3775087/pexels-photo-3775087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       name: "Alex Wong",
//       role: "Cybersecurity Expert",
//       text: "Security is my top priority, and this product has exceeded all my expectations. The robust security protocols and continuous updates provide peace of mind in an ever-changing digital landscape.",
//     },
//   ];
//   return (
//     <section
//       id="testimonial"
//       className="relative min-h-fit bg-transparent text-white px-4 py-20 lg:mx-30"
//     >
//       <div className="relative mask-gradient overflow-hidden">
//         <Marquee
//           speed={30}
//           pauseOnHover={true}
//           autoFill={true}
//           className="marquee-container"
//         >
//           {testimonials.map((testimonial, index) => (
//             <CardYT key={index} {...testimonial} />
//           ))}
//         </Marquee>
//       </div>

//       <style>
//         {`
//       /* Apply mask directly to the inner Marquee content */
//       .marquee-container > div {
//         mask-image: linear-gradient(to right, transparent, white 10%, white 90%, transparent);
//         -webkit-mask-image: linear-gradient(to right, transparent, white 10%, white 90%, transparent);
//       }
      
//       .mask-gradient {
//             mask-image: linear-gradient(to right, transparent, white 10%, white 90%, transparent);
//             -webkit-mask-image: linear-gradient(to right, transparent, white 10%, white 90%, transparent);
//           }
//     `}
//       </style>
//     </section>
//   );
// };
