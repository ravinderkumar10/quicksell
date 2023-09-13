import React from "react";
import Ticket from "./Ticket";
import "./Board.css";
import GroupTitle from "./GroupTitle";

function Board({ tickets, groupingOption, users }) {
  const uniqueGroup = [
    ...new Set(tickets.map((ticket) => ticket[groupingOption])),
  ];
  uniqueGroup.push("Done")
  uniqueGroup.push("Incomplete")
  console.log(uniqueGroup)

  function findNameById(userId) {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : "User not found"; // Return the name or a message if not found
  }

  function findNameByPriority(priority)
  {
    switch (priority) {
      case 4:
        return "High";
      case 3:
        return "Medium";
      case 2:
        return "Low";
      case 1:
        return "Urgent";
      default:
        return "No priority";
    }
  }

  return (
    <div className="board">
      <div className="status-bar">
        {uniqueGroup.map((group) => (
          <div key={group} className="status-group">
          <GroupTitle
              title={groupingOption === "userId" ? findNameById(group) : groupingOption === "priority" ? findNameByPriority(group) : group}
              ticketCount={
                tickets.filter((ticket) => ticket[groupingOption] === group)
                  .length
              }
            />
            {/* <h2>{status}</h2> */}
            <div className="ticket-column">
              {tickets
                .filter((ticket) => ticket[groupingOption] === group)
                .map((ticket) => (
                  <Ticket key={ticket.id} ticket={ticket} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Board;
