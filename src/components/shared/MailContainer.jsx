import React, { useEffect, useState } from 'react';
import Mail from './Mail';
import { query, collection, onSnapshot, orderBy, where } from 'firebase/firestore';
import { db } from '../../config/firebase.config';
import { useSelector } from 'react-redux';

const MailContainer = ({ type }) => {
  const [mails, setMails] = useState([]);
  const [tempMails, setTempMails] = useState(mails);
  const { searchMail } = useSelector(state => state.app);
  const { user } = useSelector(state => state.user);
  const userEmail = user?.email;

  useEffect(() => {
    const filterMails = mails?.filter(mail => {
      return mail?.subject?.toLowerCase().includes(searchMail.toLowerCase())
      || mail?.message?.toLowerCase().includes(searchMail.toLowerCase())
      || mail?.to?.toLowerCase().includes(searchMail.toLowerCase()) 
      || mail?.from?.toLowerCase().includes(searchMail.toLowerCase());
    });
    setTempMails(filterMails);
  }, [searchMail, mails]);
  
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
      setMails(allEmails);
    });
    
    return () => unsubscribe();
  }, [type, userEmail]);
  
  return (
    <div>
      {
        mails?.length > 0 ? (
          tempMails.map((mail) => <Mail key={mail.id} mail={mail} />)
        ) : (
          <p className="text-center text-gray-400 mt-4">No {type} mails found.</p>
        )
      }
    </div>
  )
}

export default MailContainer
