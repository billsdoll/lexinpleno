// export default function StatsSection() {
//   const stats = [
//     { value: "3,000+", label: "Resolved Cases" },
//     { value: "1,000+", label: "Associates" },
//     { value: "10,540+", label: "Satisfied Clients" },
//   ]

//   return (
//     <section className="py-20 bg-primary text-primary-foreground">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className="space-y-2 animate-in fade-in zoom-in duration-700"
//               style={{ animationDelay: `${index * 150}ms` }}
//             >
//               <p className="text-5xl font-bold text-accent">{stat.value}</p>
//               <p className="text-lg text-primary-foreground/80">{stat.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
