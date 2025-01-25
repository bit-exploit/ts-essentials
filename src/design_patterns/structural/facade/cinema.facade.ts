import { TicketBooking, Notifications, SeatAssignment } from "./subsistems";

export default class CinemaFacade {
  private ticketBooking: TicketBooking;
  private notifications: Notifications;
  private seatAssignment: SeatAssignment;

  constructor() {
    this.ticketBooking = new TicketBooking();
    this.notifications = new Notifications();
    this.seatAssignment = new SeatAssignment();
  }

  bookMovieExperience(movie: string, date: string, email: string): void {
    console.log(this.ticketBooking.bookTicket(movie, date));
    console.log(this.seatAssignment.assignSeat());
    console.log(this.notifications.sendConfirmation(email));
  }
}
