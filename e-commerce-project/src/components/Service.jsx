import FAQ from "./FAQ";
import ServiceCard from "./ServiceCard";
// import FAQ from "./components/FAQ";

const services = [
  {
    title: "Fast Delivery",
    description: "Get your products delivered within 24 hours.",
    icon: "🚚",
  },
  {
    title: "24/7 Support",
    description: "Our team is available anytime for your questions.",
    icon: "📞",
  },
  {
    title: "Secure Payments",
    description: "All transactions are encrypted and safe.",
    icon: "🔒",
  },
];

function Service() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Services</h1>
      {/* <div>
        <img src="https://media.istockphoto.com/id/2207271217/photo/optimization-of-procurement-or-purchasing-product-order-for-online-shopping-and-service.jpg?s=1024x1024&w=is&k=20&c=PYQL9vGi4asRT8h_tKZCgrD8NKQKOwL40DEKDP_1lsk=" alt="" width={'400px'} />
      </div> */}
     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-10">
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </div>
      <div className="flex justify-center items-center w-4/5 mx-auto my-16">
         <img src="https://www.technokryon.com/img/services/e-comm/ecom-inner.png" className="w-lg" />
         <p className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam repellat dolores delectus unde corrupti aliquam dignissimos quisquam totam quis accusamus. Rem ducimus, aperiam incidunt odit officiis autem vitae tempora enim.</p>
      </div>
      <div className="mt-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Frequently Asked Questions</h2>
        <FAQ />
      </div>
    </div>
  );
}

export default Service;
