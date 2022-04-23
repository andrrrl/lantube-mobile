import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TransferService } from 'src/app/services/transfer.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
})
export class TransferComponent implements OnInit {
  formSubmitted = false;
  userForm: FormGroup;
  user: any;

  accountValidationMessages = {
    transferAddress: [
      { type: 'required', message: 'Transfer Address is required' },
      {
        type: 'minLength',
        message: 'Transfer Address must be 42 characters long',
      },
      {
        type: 'maxLength',
        message: 'Transfer Address must be 42 characters long',
      },
    ],
    amount: [
      { type: 'required', message: 'Amount is required' },
      { type: 'pattern', message: 'Amount must be a positive number' },
    ],
    remarks: [{ type: 'required', message: 'Remarks are required' }],
  };

  constructor(private fb: FormBuilder, private ts: TransferService) {}

  ngOnInit() {
    this.formSubmitted = false;
    this.user = {
      address: '',
      transferAddress: '',
      balance: '',
      amount: '',
      remarks: '',
    };
    this.getAccountAndBalance();
    this.createForms();
    this.ts.enableAccount();
  }

  createForms() {
    this.userForm = this.fb.group({
      transferAddress: new FormControl(
        this.user.transferAddress,
        Validators.compose([
          Validators.required,
          Validators.minLength(42),
          Validators.maxLength(42),
        ])
      ),
      amount: new FormControl(
        this.user.amount,
        Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9]?([.]\\d+|\\d+[.]?\\d*)$'),
        ])
      ),
      remarks: new FormControl(
        this.user.remarks,
        Validators.compose([Validators.required])
      ),
    });
  }

  getAccountAndBalance() {
    this.ts
      .getUserBalance()
      .then(function (retAccount: any) {
        this.user.address = retAccount.account;

        this.user.balance = retAccount.balance;
        console.log('transfer.components :: getAccountAndBalance :: this.user');
        console.log(this.user);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  submitForm() {
    if (this.userForm.invalid) {
      alert('transfer.components :: submitForm :: Form invalid');
      return;
    } else {
      console.log('transfer.components :: submitForm :: this.userForm.value');
      console.log(this.userForm.value);
      this.ts
        .transferEther(this.userForm.value)
        .then(function () {})
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}
