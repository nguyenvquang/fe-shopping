import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private firestore: AngularFirestore) { }

  getUsers() {
    return this.http.get('/api/user');
  }

  createCoffeeOrder(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('coffeeOrders')
        .add(data)
        .then(res => {
          console.log(res);
        }, err => reject(err));
    });
  }

  getCoffeeOrders() {
    return
    this.firestore.collection('coffeeOrders');
  }

  updateUser(userKey, value){
    value.nameToSearch = value.name.toLowerCase();
    return this.firestore.collection('users').doc(userKey).set(value);
  }

  deleteUser(userKey) {
    return this.firestore.collection('coffeeOrders').doc(userKey).delete();
  }

}
