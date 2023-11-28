import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService } from './dashboard.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  apiData: any[] = [];
  constructor(private apiService: DashboardService) {}

  isCollapsed: boolean = true;
  searchValue : string="";
  toggleCollapse() {
      this.isCollapsed = !this.isCollapsed;
      this.getDataFromApi();
  }
  ngOnInit(): void {
    
  }

  sortData() {
    this.apiData = this.apiData.filter(item => item.driverID === this.searchValue);    
  }
   getDataFromApi() {
    
    this.apiService.startApi().subscribe(
      data => {
        this.apiData = data;
      }
    );
  } 
}
