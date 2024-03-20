import React from 'react';
import { Modal, Button, Typography, Box } from '@mui/material'
import { IoCloseCircleOutline } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import FormCountryUpdate from './FormCountryUpdate';

export default function ModalCardUpdate({loadCountryWhenClose, id}: any){
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return(
    <div className='w-[480px] lg:w-full'>
      <div className='bg-slate-800 rounded flex justify-center items-center'>
        <Button onClick={handleOpen}>
          <MdEdit size={18} color='#fff' />
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute' as 'absolute',
          left: '50%',
          top: '50%',
          minWidth: '90%',
          background: '#6e67c5',
          transform: 'translate(-50%, -50%)',
          border: '2px solid #000',
          boxShadow: 24,
          borderRadius: '20px',
          p: 2,}}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign: 'center', fontWeight: 'bold', color: '#fff', fontSize: '32px', marginBottom: '-4%'}}>
            Atualizar país
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <FormCountryUpdate id={id} />
            <button className='absolute cursor-pointer top-2 right-2 lg:top-6 lg:right-8' onClick={() => {handleClose(); loadCountryWhenClose()}}>
              <IoCloseCircleOutline size={32} color='#fff' />
            </button>
          </Typography>
        </Box>
      </Modal>
    </div>
    
  )
}