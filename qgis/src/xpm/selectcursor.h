#ifndef SELECTCURSOR_H
#define SELECTCURSOR_H

static unsigned char select_cursor_bits[] = 
{
  0x00, 0x00, 0xfe, 0x00, 0x7e, 0x00, 0x1e, 0x00, 0x3e, 0x00, 0x76, 0x00,
  0xf6, 0x55, 0xc2, 0x01, 0x90, 0x43, 0x00, 0x07, 0x10, 0x4e, 0x00, 0x0c,
  0x50, 0x55, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
};


static unsigned char select_cursor_mask_bits[] = 
{
   0x00, 0x00, 0xfe, 0x00, 0x7e, 0x00, 0x1e, 0x00, 0x3e, 0x00, 0x76, 0x00,
   0xf6, 0x7f, 0xf2, 0x7f, 0xf0, 0x7f, 0xf0, 0x7f, 0xf0, 0x7f, 0xf0, 0x7f,
   0xf0, 0x7f, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
};

#endif
