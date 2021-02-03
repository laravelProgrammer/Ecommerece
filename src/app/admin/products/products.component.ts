import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
declare var $;
declare var toaster;
declare var toast;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : any;
  message:any = "";
   errorsMessages = [];
  tempId = "";
  selectedImage : File = null;
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
   
  getAllProducts(){
    this.productService.getProducts().subscribe(res => {
      this.products = res;
     // console.log(this.products);
    })
  }

  search(input){
    this.productService.getFromDB(input).subscribe(res => {
      this.products = res;
    });
  }

  onSelect(event){
    var tmpPath = URL.createObjectURL(event.target.files[0]);
    $(".addImage").fadeIn("fast").attr("src", tmpPath);
    this.selectedImage = <File> event.target.files[0];
   // console.log(tmpPath);

  }

  add() {
    var message;
    const fd =  new FormData;
    fd.append('image', this.selectedImage);
    fd.append('name', $("#name").val());
    fd.append('category', $("#category").val());
    fd.append('brand', $("#brand").val());
    fd.append('price', $("#price").val());
    fd.append('description', $("#description").val());
    console.log($("#name").val());
    console.log(fd);
    this.productService.addProducts(fd).subscribe(res => {
      message = res;
      console.log(message);
      this.getAllProducts();
       if(message.status == 'true'){
         this.message = message.message;
      }
    },
    error => {
      error.error.errors.forEach(element => {
        this.errorsMessages.push(element);
      });  
     });
  }


  editFunction(id){
    this.tempId = id;
    this.products.forEach(element => {
      if(element.id == id){
        console.log(element);
       $("#uImage").fadeIn("fast").attr("src", element.image_path);
        $("#uname").prop("value", element.name);
        $("#ucategory").prop("value", element.category);
        $("#ubrand").prop("value", element.brand);
        $("#uprice").prop("value", element.price);
        $("#udescription").prop("value", element.description);
      }
    });
  }

  showFunction(id){
    this.tempId = id;
    this.products.forEach(element => {
      if(element.id == id){
       $("#sImage").fadeIn("fast").attr("src", element.image_path);
        $("#sname").prop("value", element.name);
        $("#scategory").prop("value", element.category);
        $("#sbrand").prop("value", element.brand);
        $("#sprice").prop("value", element.price);
        $("#sdescription").prop("value", element.description);
      }
    });
  }

  updatePro(){
    var message;
    const fd =  new FormData;
    fd.append('id', this.tempId);
    fd.append('image', this.selectedImage);
    fd.append('name', $("#uname").val());
    fd.append('category', $("#ucategory").val());
    fd.append('brand', $("#ubrand").val());
    fd.append('price', $("#uprice").val());
    fd.append('description', $("#udescription").val());
  
    this.productService.updateProduct(fd).subscribe(res => {
      message = res;
      console.log(message);
      this.getAllProducts();
       if(message.status == 'true'){
         this.message = message.message;
      }
    },
    error => {
      error.error.errors.forEach(element => {
        this.message = element;
      });  
     });
  }


  deleteFunction(id){
    this.tempId = id;
    console.log(this.tempId);
  }
  deleteproduct(){
    var message;
    this.productService.deleteProduct(this.tempId).subscribe(res => {
      message = res;
      this.getAllProducts();
       if(message.status == 'true'){
         this.message = message.message;
        }
     },
     error => {
       if(message.status == 'false'){
         this.message = message.message;
       }
     });
  }
}
