import React from "react";

import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";
import { kanbanData, kanbanGrid } from "../../data/dummy";
import { Header, NavbarTitle } from "../../components";

const Tasks = () => {
  return (
    <div>
      <NavbarTitle headTitle={"Task Manager"} />

      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="App" title="My Tasks" />
        <KanbanComponent
          id="kanban"
          keyField="Status"
          dataSource={kanbanData}
          cardSettings={{ contentField: "Summary", headerField: "Id" }}
        >
          <ColumnsDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {kanbanGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
        </KanbanComponent>
      </div>
    </div>
  );
};

export default Tasks;
