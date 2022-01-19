import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})


export class ProfileServiceService {
  newUser: User;
  
  constructor() {this.newUser = new User("Richard Moss","mossiii95@yahoo.com","DevBuild Student 2022");}
  
  getUserProfile() : User{    
    return this.newUser;
  }

  setUserProfile(name: string, contactInfo: string, biography: string){
    this.newUser.name = name;
    this.newUser.contactInfo = contactInfo;
    this.newUser.biography = biography;
  }
}