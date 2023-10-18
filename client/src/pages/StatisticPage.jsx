import Header from "../components/header/Header";
import StatisticsCard from "../components/statistics/StatisticsCard";

const StatisticPage = () => {
 
  return (
    <>
      <Header />
      <div className="px-6">
        <h1 className="text-center text-4xl font-bold mb-4">İstatistikler</h1>
        <div className="statistic-section">
          <h2 className="text-lg">
            Hoş Geldin
            <span className="text-green-700 font-bold text-xl"> admin</span>
          </h2>
          <div className="statistic-cards grid xl:grid-cols-4 md:grid-cols-2  my-10 md:gap-10 gap-4">
            <StatisticsCard
              title={"Toplam Müşteri"}
              amount={"6"}
              img={"images/profile.png"}
            />
            <StatisticsCard
              title={"Toplam Kazanç"}
              amount={"660.96₺"}
              img={"images/money.png"}
            />
            <StatisticsCard
              title={"Toplam Satış"}
              amount={"6"}
              img={"images/sale-tag.png"}
            />
            <StatisticsCard
              title={"Toplam Ürün"}
              amount={"28"}
              img={"images/box.png"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticPage;
