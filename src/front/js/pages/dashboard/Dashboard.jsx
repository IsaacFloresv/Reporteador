import React from "react";

// Components
import NumbersChart from "../../components/widgets/numbers-chart/NumbersChart.jsx";

// images
import WidgetContainer from "../../components/widgets/widget-container/WidgetContainer.jsx";
import CasesFollowing from "../../components/widgets/cases-following/CasesFollowing.jsx";
import Notifications from "../../components/widgets/notifications/Notifications.jsx";
import CalendarWidget from "../../components/widgets/calendar/Calendar.jsx";
import CtaUpgrade from "../../components/cta-upgrade/CtaUpgrade.jsx";
import TasksWidget from "../../components/widgets/tasks/TasksWidget.jsx";
import Agenda from "../../components/widgets/agenda/Agenda.jsx";

const Dashboard = () => {
  const chartData = [
    {
      cant: "$3,089.64",
      difference: "-10%",
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

  const test = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  const agenda = [
    {
      day: 1,
      month: "ago",
      timeStart: "9:30am",
      timeEnd: "10:30am",
      description: "Reunion con Juan nieves",
    },
    {
      day: 1,
      month: "ago",
      timeStart: "11:30am",
      timeEnd: "12:30am",
      description: "Comer nieve en jamaica",
    },
    {
      day: 8,
      month: "ago",
      timeStart: "9:30am",
      timeEnd: "10:30am",
      description: "Vencer a amber heard",
    },
    {
      day: 8,
      month: "ago",
      timeStart: "9:30am",
      timeEnd: "10:30am",
      description: "Llamar a Jimmy",
    },
    {
      day: 12,
      month: "ago",
      timeStart: "9:30am",
      timeEnd: "10:30am",
      description: "Reunion con Juan nieves",
    },
    {
      day: 13,
      month: "ago",
      timeStart: "9:30am",
      timeEnd: "10:30am",
      description: "Reunion con Juan nieves",
    },
    {
      day: 13,
      month: "ago",
      timeStart: "9:30am",
      timeEnd: "10:30am",
      description: "Reunion con Juan nieves",
    },
    {
      day: 18,
      month: "ago",
      timeStart: "9:30am",
      timeEnd: "10:30am",
      description: "Reunion con Juan nieves",
    },
    {
      day: 24,
      month: "ago",
      timeStart: "9:30am",
      timeEnd: "10:30am",
      description: "Reunion con Juan nieves",
    },
  ];

  // Render
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

      {/* CTA banner */}
      <CtaUpgrade />

      {/* Widgets */}
      {/* Left Columns */}
      <div className="row">
        <div className="col-5 p-0 pe-2">
          <div className="mb-3">
            {/* Cases Following */}
            <WidgetContainer title="Casos en seguimiento">
              <div
                style={{ height: 400, width: 100 + "%", overflowY: "scroll" }}
              >
                {test.map((item, index) => {
                  return (
                    <div key={index}>
                      <CasesFollowing />
                    </div>
                  );
                })}
              </div>
            </WidgetContainer>
          </div>

          {/* My Notes */}
          <div>
            <WidgetContainer title="Mis notas">
              <div
                style={{ height: 370, width: 100 + "%", overflowY: "scroll" }}
                className="position-relative"
              >
                {test.map((item, index) => {
                  return (
                    <div key={index}>
                      <TasksWidget />
                    </div>
                  );
                })}
                <div
                  className="position-sticky bottom-0 end-50 pb-3"
                  style={{ transform: "scale(0.8)" }}
                >
                  <div className="d-flex justify-content-center">
                    <button className="btn btn-white bg-white shadow px-5">
                      Crear nueva tarea{" "}
                      <span className="text-primary"> + </span>
                    </button>
                  </div>
                </div>
              </div>
            </WidgetContainer>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-7 p-0 ps-2">
          <div className="col d-flex mb-3">
            <div className="me-3 w-75">
              {/* Notifications */}
              <WidgetContainer title="Notificaciones">
                <div
                  style={{ height: 270, width: 100 + "%", overflowY: "scroll" }}
                >
                  {test.map((item, index) => {
                    return (
                      <div key={index}>
                        <Notifications />
                      </div>
                    );
                  })}
                </div>
              </WidgetContainer>
            </div>

            {/* CalendarWidget */}
            <div className="w-100">
              <WidgetContainer title="Calendario">
                <CalendarWidget />
              </WidgetContainer>
            </div>
          </div>
          <div className="col">
            <WidgetContainer title="Mi Agenda">
              <div
                style={{ height: 500, width: 100 + "%", overflowY: "scroll" }}
              >
                {agenda.map((item, index) => {
                  return (
                    <div key={index}>
                      <Agenda
                        month={item.month}
                        day={item.day}
                        timeStart={item.timeStart}
                        timeEnd={item.timeEnd}
                        description={item.description}
                        showDay={
                          index === 0
                            ? true
                            : item.day === agenda[index - 1].day
                            ? false
                            : true
                        }
                        index={index}
                      />
                    </div>
                  );
                })}
              </div>
            </WidgetContainer>
          </div>
        </div>
      </div>
      <div id="cleaner" className="py-5" />
    </>
  );
};

export default Dashboard;
