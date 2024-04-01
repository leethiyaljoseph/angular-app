import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  studentRegNo: number = 0;
  studentFirstName:string= '';
  studentLastName: string='';
  studentMobileNo:number= 0;
  studentTotalMarks: string='';
  studentRank:number= 0;
  studentStatus: boolean= true;
  studentRemarks:string= '';
  isViewing: boolean = false;


studentRecords: studentsRecord []=  [
    {
      id : 1,
      studentRegNo : 200134,
      studentFirstName : "Leethiyal",
      studentLastName : "Joseph",
      studentMobileNo : 6789012345,
      studentTotalMarks: "430/500",
      studentRank : 5,
      studentStatus : true,
      studentRemarks : "Pass",
    },{
      id : 2,
      studentRegNo : 200135,
      studentFirstName : "Itshuki",
      studentLastName : "Takashi",
      studentMobileNo : 8976543290,
      studentTotalMarks: "490/500",
      studentRank : 1,
      studentStatus : true,
      studentRemarks : "Pass",
     },{
      id : 3,
      studentRegNo : 200136,
      studentFirstName : "Shajitha",
      studentLastName : "Nafees",
      studentMobileNo : 7898654387,
      studentTotalMarks: "450/500",
      studentRank : 4,
      studentStatus : true,
      studentRemarks : "Pass",
    },{
      id : 4,
      studentRegNo : 200137,
      studentFirstName : "Bharath",
      studentLastName : "Sankar",
      studentMobileNo : 9998887770,
      studentTotalMarks: "420/500",
      studentRank : 6,
      studentStatus : true,
      studentRemarks : "Pass",
    },{
      id : 5,
      studentRegNo : 200138,
      studentFirstName : "Sharal",
      studentLastName : "Grace",
      studentMobileNo : 9994067788,
      studentTotalMarks: "240/500",
      studentRank : 0,
      studentStatus : false,
      studentRemarks : "Fail",
    },{
      id : 6,
      studentRegNo : 200139,
      studentFirstName : "Priya",
      studentLastName : "Dharshini",
      studentMobileNo : 7788990011,
      studentTotalMarks: "475/500",
      studentRank : 2,
      studentStatus : true,
      studentRemarks : "Pass",
    },{
      id : 7,
      studentRegNo : 200139,
      studentFirstName : "Kavi",
      studentLastName : "Priya",
      studentMobileNo : 8989765432,
      studentTotalMarks: "462/500",
      studentRank : 3,
      studentStatus : true,
      studentRemarks : "Pass",
    },{
      id : 8,
      studentRegNo : 200140,
      studentFirstName : "Oliva",
      studentLastName : "Sam",
      studentMobileNo : 9876578901,
      studentTotalMarks: "211/500",
      studentRank : 0,
      studentStatus : false,
      studentRemarks : "Fail",
    },{
      id : 9,
      studentRegNo : 200141,
      studentFirstName : "Bivon",
      studentLastName : "Roy",
      studentMobileNo : 8976875432,
      studentTotalMarks: "401/500",
      studentRank : 7,
      studentStatus : true,
      studentRemarks : "Pass",
    },{
      id : 10,
      studentRegNo : 200142,
      studentFirstName : "Jeya",
      studentLastName : "Shree",
      studentMobileNo : 7010289232,
      studentTotalMarks: "220/500",
      studentRank : 0,
      studentStatus : false,
      studentRemarks : "Fail",
    },{
      id : 11,
      studentRegNo : 200143,
      studentFirstName : "Harry",
      studentLastName : "Potter",
      studentMobileNo : 7838722701,
      studentTotalMarks: "380/500",
      studentRank : 7,
      studentStatus : true,
      studentRemarks : "Pass",
    }
  ]
  isVisible = false;
  selectedStudentRecord: studentsRecord | undefined;

  toggleVisibility(studentRecord: studentsRecord) {
    this.selectedStudentRecord = studentRecord;
    this.isVisible = true;
    studentRecord.editing = false;
    studentRecord.editing = !studentRecord.editing;
    

  this.studentRegNo = studentRecord.studentRegNo;
  this.studentFirstName = studentRecord.studentFirstName;
  this.studentLastName = studentRecord.studentLastName;
  this.studentMobileNo = studentRecord.studentMobileNo;
  this.studentTotalMarks = studentRecord.studentTotalMarks;
  this.studentRank = studentRecord.studentRank;
  this.studentStatus = studentRecord.studentStatus;
  this.studentRemarks = studentRecord.studentRemarks;
   
  this.isViewing = true;
  }

  toggleEdit(studentRecord: studentsRecord) {
    this.studentRecords.forEach(record => {
      if (record !== studentRecord) {
        record.editing = false;
      }
      this.editingId = studentRecord.id;
    });
    studentRecord.editing = !studentRecord.editing;

    this.studentRegNo = studentRecord.studentRegNo;
    this.studentFirstName = studentRecord.studentFirstName;
    this.studentLastName = studentRecord.studentLastName;
    this.studentMobileNo = studentRecord.studentMobileNo;
    this.studentTotalMarks = studentRecord.studentTotalMarks;
    this.studentRank = studentRecord.studentRank;
    this.studentStatus = studentRecord.studentStatus;
    this.studentRemarks = studentRecord.studentRemarks;
    
    this.isViewing = false; // Set to false when editing
}

  cancelView(): void {
    this.isVisible = false;
    this.isViewing = false;
  }
  editingId: number | null = null;


onclick() {
  if (this.editingId !== null) {
    // We are in editing mode, find the record and update it
    let recordIndex = this.studentRecords.findIndex(record => record.id === this.editingId);
    if (recordIndex !== -1) {
      this.studentRecords[recordIndex].studentRegNo = this.studentRegNo;
      this.studentRecords[recordIndex].studentFirstName = this.studentFirstName;
      this.studentRecords[recordIndex].studentLastName = this.studentLastName;
      this.studentRecords[recordIndex].studentMobileNo = this.studentMobileNo;
      this.studentRecords[recordIndex].studentTotalMarks = this.studentTotalMarks;
      this.studentRecords[recordIndex].studentRank = this.studentRank;
      this.studentRecords[recordIndex].studentStatus = this.studentStatus;
      this.studentRecords[recordIndex].studentRemarks = this.studentRemarks;
    }
  } else {
    // Adding a new record
    const newId = this.studentRecords.length > 0 ? Math.max(...this.studentRecords.map(record => record.id)) + 1 : 1;
    const newRecord: studentsRecord = {
      id: newId, // This ensures unique ID even after deletion
      studentRegNo: this.studentRegNo,
      studentFirstName: this.studentFirstName,
      studentLastName: this.studentLastName,
      studentMobileNo: this.studentMobileNo,
      studentTotalMarks: this.studentTotalMarks,
      studentRank: this.studentRank,
      studentStatus: this.studentStatus,
      studentRemarks: this.studentRemarks,
    };
  
    this.studentRecords.push(newRecord);
  }

  // Reset the form and editing state
  this.openAddModal(); 
  this.isViewing = false;
  this.editingId = null; 
}

// deleteStudentRecord(studentRecord: studentsRecord): void {
//   const index = this.studentRecords.indexOf(studentRecord);
//   (confirm("Are you sure to delete?"))
//     this.studentRecords.splice(index, 1);
//   alert("Record deleted successfully")
// }

deleteStudentRecord(studentRecord: studentsRecord): void {
  // SweetAlert2 confirmation dialog
  Swal.fire({
    title: 'Are you sure?',
    text: 'You will not be able to recover this record!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it'
  }).then((result) => {
    if (result.isConfirmed) {
      // User clicked 'Yes, delete it!'
      const index = this.studentRecords.indexOf(studentRecord);
      this.studentRecords.splice(index, 1);
      
      // Success notification
      Swal.fire(
        'Deleted!',
        'Your record has been deleted.',
        'success'
      );
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      // User clicked 'No, keep it'
      Swal.fire(
        'Cancelled',
        'Your record is safe :)',
        'error'
      );
    }
  });
}

getRankClass(studentRank: number){
  switch (studentRank) {
    case 1:
      return 'text-success';
    case 2:
      return 'text-warning';
    case 3:
      return 'text-primary';
    default:
      return '';
  }
}
openAddModal(): void {
  this.isViewing = false;
  // Reset form fields to default values for adding a new record
  this.studentRegNo = 0;
  this.studentFirstName = '';
  this.studentLastName = '';
  this.studentMobileNo = 0;
  this.studentTotalMarks = '';
  this.studentRank = 0;
  this.studentStatus = true;
  this.studentRemarks = '';
}

getStatusClass(studentRemarks: string){
  return studentRemarks === 'Fail' ? 'text-danger': '';
}
}
interface studentsRecord {
  id: number;
  studentRegNo: number;
  studentFirstName: string;
  studentLastName: string;
  studentMobileNo: number;
  studentTotalMarks: string;
  studentRank: number;
  studentStatus: boolean;
  studentRemarks: string;
  editing?: boolean;
}
