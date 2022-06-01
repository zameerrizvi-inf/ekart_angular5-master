import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

import { DataService } from '../../data.service';
import { Product } from '../product';

@Component({ 
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent {
  productForm: FormGroup;
  productTypes: string[];
  faTrash = faTrash;
  faPlus = faPlus;
  imgLabel = 'Select Image';
  imageToUpload: File;

  constructor(
    private fb: FormBuilder,
    private ds: DataService,
    private router: Router
  ) {
    this.productTypes = this.ds.productTypes;
    this.createForm();
  }

  createForm() {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      price: [0, Validators.required],
      imgName: ['', Validators.required],
      descriptions: this.fb.array([]),
    });
  }

  addDescription() {
    this.descriptions.push(this.fb.control('', Validators.required));
  }

  deleteDescription(i: number) {
    this.descriptions.removeAt(i);
  }

  onFileChange(files: FileList) {
    this.imageToUpload = files.item(0);
    this.imgLabel = 'Update Image';
  }

  onSubmit() {
    this.ds.addProduct(this.prepareProduct()).subscribe(o => {
      this.router.navigate(['/home']);
    });
  }

  uploadImage() {
    this.ds.postImage(this.imageToUpload).subscribe(imgName => {
      this.productForm.patchValue({ imgName });
      this.imageToUpload = null;
    });
  }

  prepareProduct(): Product {
    const formModel = this.productForm.value;

    const descriptionsCopy = formModel.descriptions.slice();

    const saveProduct: Product = {
      name: formModel.name,
      price: formModel.price,
      type: formModel.type,
      imgName: formModel.imgName,
      descriptionList: descriptionsCopy,
    };

    return saveProduct;
  }

  get descriptions(): FormArray {
    return this.productForm.get('descriptions') as FormArray;
  }

  get imgName(): FormControl {
    return this.productForm.get('imgName') as FormControl;
  }
}
