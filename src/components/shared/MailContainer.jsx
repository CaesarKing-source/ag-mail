import React, { useEffect, useState } from 'react';
import Mail from './Mail';
import { query, collection, onSnapshot, orderBy, where } from 'firebase/firestore';
import { db } from '../../config/firebase.config';


const MailContainer = ({ type }) => {
  const [mails, setMails] = useState([]);
  const userEmail = 'agiri6562@gmail.com'
  useEffect(() => {
    let q;
    switch(type) {
      case 'Inbox': 
      q = query(collection(db, 'inbox-emails'),
      where("to", "==", userEmail),
      where("isActive", "==", true), 
      orderBy("createdAt", 'desc'));
      break;

      case 'Sent': 
      q = query(collection(db, 'inbox-emails'), 
      where("from", "==", userEmail),
      orderBy("createdAt", "desc")
      );
      break;

      case 'Starred':
      q = query(collection(db, 'inbox-emails'), 
      where("isStarred", "==", true),
      where("isActive", "==", true),
      orderBy("createdAt", "desc")
      )
      break;

      case 'Trash': 
      q = query(collection(db, 'inbox-emails'), 
      where("isActive", "==", false),
      orderBy("createdAt", "desc")
      );
      break;

      default:
        q = query(collection(db, "inbox-emails"));
    }
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allEmails = snapshot.docs?.map((doc) => ({...doc.data(), id: doc.id}));
      console.log(allEmails)
      setMails(allEmails);
    });
    
    return () => unsubscribe();
  }, [type]);
  
  return (
    <div>
      {
        mails?.length > 0 ? (
          mails.map((mail) => <Mail key={mail.id} mail={mail} />)
        ) : (
          <p className="text-center text-gray-400 mt-4">No {type} mails found.</p>
        )
      }
    </div>
  )
}

export default MailContainer
