const stats = [
  {name: "Offices worldwide", value: "12"},
  {name: "Full-time colleagues", value: "300+"},
  {name: "Hours per week", value: "40"},
  {name: "Paid time off", value: "34"},
];
function Support() {
  return (
    <div
      id="view"
      className="relative isolate overflow-hidden py-16 sm:py-28 mx-auto max-w-7xl px-6 lg:px-20"
    >
      <div className="mx-auto max-w-4xl flex flex-col justify-center text-center">
        <h2 className="text-2xl font-normal text-gray-900 uppercase sm:text-4xl">
          endüstriyel tedarik
        </h2>
        <p className="mt-4 sm:mt-10 text-pretty text-lg font-normal text-gray-700 sm:text-lg/8 text-justify">
          Yüksek performans odaklı ürünlerimiz, iyi fiyat politikamız, uzman
          ekibimiz ve 7/24 sahada olma gücümüzle firmanızın tüm endüstriyel
          temizlik ve hijyen ihtiyaçlarına uçtan uca çözüm sunuyoruz.
        </p>
        <dl className="mt-6 grid grid-cols-2 gap-6 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.name} className="flex flex-col-reverse gap-1">
              <dt className="text-base/7 text-gray-700">{stat.name}</dt>
              <dd className="text-4xl font-normal tracking-tight text-gray-800">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default Support;
