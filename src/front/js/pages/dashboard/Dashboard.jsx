import React from "react";

// Components
import NumbersChart from "../../components/widgets/numbers-chart/NumbersChart.jsx";

// images
import CtaUpgrade from "../../components/cta-upgrade/CtaUpgrade.jsx";
import WidgetContainer from "../../components/widgets/widget-container/WidgetContainer.jsx";
import Calendar from "../../components/widgets/calendar/Calendar.jsx";

const Dashboard = () => {
  const chartData = [
    {
      cant: "$3,089.64",
      difference: "-10%",
      type: "Pagos",
      time: 30,
      style: "negative",
    },
    {
      cant: "12",
      difference: "+47%",
      type: "Casos abiertos",
      time: 30,
      style: "positive",
    },
    {
      cant: "137",
      difference: "+64%",
      type: "Casos cerrados",
      time: 365,
      style: "positive",
    },
  ];

  const test = [
    {
      cant: "$3,089.64",
      difference: "-10%",
      type: "Pagos",
      time: 30,
      style: "negative",
    },
    {
      cant: "12",
      difference: "+47%",
      type: "Casos abiertos",
      time: 30,
      style: "positive",
    },
    {
      cant: "137",
      difference: "+64%",
      type: "Casos cerrados",
      time: 365,
      style: "positive",
    },
    {
      cant: "137",
      difference: "+64%",
      type: "Casos cerrados",
      time: 365,
      style: "positive",
    },
    {
      cant: "137",
      difference: "+64%",
      type: "Casos cerrados",
      time: 365,
      style: "positive",
    },
    {
      cant: "137",
      difference: "+64%",
      type: "Casos cerrados",
      time: 365,
      style: "positive",
    },
    {
      cant: "137",
      difference: "+64%",
      type: "Casos cerrados",
      time: 365,
      style: "positive",
    },
    {
      cant: "137",
      difference: "+64%",
      type: "Casos cerrados",
      time: 365,
      style: "positive",
    },
    {
      cant: "137",
      difference: "+64%",
      type: "Casos cerrados",
      time: 365,
      style: "positive",
    },
    {
      cant: "137",
      difference: "+64%",
      type: "Casos cerrados",
      time: 365,
      style: "positive",
    },
    {
      cant: "137",
      difference: "+64%",
      type: "Casos cerrados",
      time: 365,
      style: "positive",
    },
    {
      cant: "137",
      difference: "+64%",
      type: "Casos cerrados",
      time: 365,
      style: "positive",
    },
    {
      cant: "137",
      difference: "+64%",
      type: "Casos cerrados",
      time: 365,
      style: "positive",
    },
    {
      cant: "137",
      difference: "+64%",
      type: "Casos cerrados",
      time: 365,
      style: "positive",
    },
    {
      cant: "137",
      difference: "+64%",
      type: "Casos cerrados",
      time: 365,
      style: "positive",
    },
    {
      cant: "137",
      difference: "+64%",
      type: "Casos cerrados",
      time: 365,
      style: "positive",
    },
    {
      cant: "137",
      difference: "+64%",
      type: "Casos cerrados",
      time: 365,
      style: "positive",
    },
  ];

  return (
    <>
      <div className="row mb-3">
        {chartData.map((item, index) => {
          return (
            <>
              {/* Charts */}
              {chartData.length - 1 !== index ? (
                <div key={index} className="col border-end me-4">
                  <NumbersChart
                    cant={item.cant}
                    difference={item.difference}
                    type={item.type}
                    time={item.time}
                    style={item.style}
                  />
                </div>
              ) : (
                <div key={index} className="col">
                  <NumbersChart
                    cant={item.cant}
                    difference={item.difference}
                    type={item.type}
                    time={item.time}
                    style={item.style}
                  />
                </div>
              )}
            </>
          );
        })}
      </div>
      <CtaUpgrade />

      {/* Widgets */}
      {/* Left Columns */}
      <div className="row">
        <div className="col-5 p-0 pe-2">
          <div className="mb-3">
            <WidgetContainer title="Casos en seguimiento">
              <div
                style={{ height: 400, width: 100 + "%", overflowY: "scroll" }}
              >
                {test.map((item, index) => {
                  return (
                    <div key={index}>
                      <NumbersChart
                        cant={item.cant}
                        difference={item.difference}
                        type={item.type}
                        time={item.time}
                        style={item.style}
                      />
                    </div>
                  );
                })}
              </div>
            </WidgetContainer>
          </div>

          <div>
            <WidgetContainer title="Mis notas">
              <h4>testing</h4>
            </WidgetContainer>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-7 p-0 ps-2">
          <div className="col d-flex mb-3">
            <div className="me-3 w-75">
              <WidgetContainer title="Notificaciones">
                <h4>testing</h4>
              </WidgetContainer>
            </div>
            <div className="w-100">
              <WidgetContainer title="Agosto, 2022">
                <Calendar />
              </WidgetContainer>
            </div>
          </div>
          <div className="col">
            <WidgetContainer title="Mi Agenda">
              <h4>testing</h4>
            </WidgetContainer>
          </div>
        </div>
      </div>
      <div id="cleaner" className="py-5"/>
    </>
  );
};

export default Dashboard;
