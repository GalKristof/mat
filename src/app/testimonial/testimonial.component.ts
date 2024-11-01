import { Component, HostListener, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss'
})

export class TestimonialComponent implements OnInit {
  cleaningOccasions = 0;
  weeklyCustomers = 0;
  satisfactionPercent = 0;

  maxCleaningOccasions = 9231;
  maxWeeklyCustomers = 120;
  maxSatisfactionPercent = 100;

  animated = false; // To avoid re-triggering animation

  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const testimonialSection = this.el.nativeElement.querySelector('.testimonials');
    const rect = testimonialSection.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom >= 0;

    if (inView && !this.animated) {
      this.animated = true;
      this.animateCounters();
    }
  }

  animateCounters() {
    const duration = 2500 ; // Duration for animation in milliseconds
    const stepTime = 25; // Time between increments
    const cleaningStep = Math.ceil(this.maxCleaningOccasions / (duration / stepTime));
    const customersStep = Math.ceil(this.maxWeeklyCustomers / (duration / stepTime));
    const satisfactionStep = Math.ceil(this.maxSatisfactionPercent / (duration / stepTime));

    const interval = setInterval(() => {
      if (this.cleaningOccasions < this.maxCleaningOccasions) {
        this.cleaningOccasions += cleaningStep;
      } else {
        this.cleaningOccasions = this.maxCleaningOccasions;
      }

      if (this.weeklyCustomers < this.maxWeeklyCustomers) {
        this.weeklyCustomers += customersStep;
      } else {
        this.weeklyCustomers = this.maxWeeklyCustomers;
      }

      if (this.satisfactionPercent < this.maxSatisfactionPercent) {
        this.satisfactionPercent += satisfactionStep;
      } else {
        this.satisfactionPercent = this.maxSatisfactionPercent;
      }

      if (
        this.cleaningOccasions >= this.maxCleaningOccasions &&
        this.weeklyCustomers >= this.maxWeeklyCustomers &&
        this.satisfactionPercent >= this.maxSatisfactionPercent
      ) {
        clearInterval(interval);
      }
    }, stepTime);
  }
}
