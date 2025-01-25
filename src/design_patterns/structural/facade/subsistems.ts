export class TicketBooking {
  bookTicket(movie: string, date: string): string {
    return `Ticket booked for "${movie}" on ${date}`;
  }
}

export class Notifications {
  sendConfirmation(email: string): string {
    return `Confirmation sent to ${email}`;
  }
}

export class SeatAssignment {
  assignSeat(): string {
    return `Seat assigned successfully`;
  }
}
