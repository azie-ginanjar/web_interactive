import React from 'react';
import CustomScrollbars from 'util/CustomScrollbars';
import Navigation from "../../components/Navigation";

const SideBarContent = () => {
  const navigationMenus = [
    {
      name: 'PPID',
      type: 'section',
      children: [
        {
          name: 'Profil PPID',
          type: 'item',
          link: '/app/bkkbn/permohonan'
        },
        {
          name: 'Maklumat Pelayanan',
          type: 'item',
          link: '/app/bkkbn/summary'
        },
        {
          name: 'Tata Cara Permohonan Informasi',
          type: 'item',
          link: '/app/bkkbn/summary'
        },
        {
          name: 'Tata Cara Pengajuan Keberatan',
          type: 'item',
          link: '/app/bkkbn/summary'
        },
        {
          name: 'Formulir Permohonan Informasi',
          type: 'item',
          link: '/app/bkkbn/summary'
        },
        {
          name: 'Hak dan Kewajiban Badan Publik ',
          type: 'item',
          link: '/app/bkkbn/summary'
        },
        {
          name: 'Hak dan Kewajiban Pemohon Informasi',
          type: 'item',
          link: '/app/bkkbn/summary'
        },
        {
          name: 'Jumlah Pemohon Informasi',
          type: 'item',
          link: '/app/bkkbn/summary'
        },
        {
          name: 'Daftar Informasi Publik',
          type: 'collapse',
          icon: 'view-dashboard',
          children: [
            {
              name: 'Informasi yang Wajib Diumumkan dan Disediakan Secara Berkala',
              type: 'item',
              link: '/app/bkkbn/kampung1'
            },
            {
              name: 'Informasi yang Wajib Disediakan secara Serta Merta',
              type: 'item',
              link: '/app/bkkbn/kampung1'
            },
            {
              name: 'Informasi yang Wajib Tersedia Setiap Saat',
              type: 'item',
              link: '/app/bkkbn/kampung1'
            }
          ]
        },
        {
          name: 'program dan kegiatan lainnya',
          type: 'collapse',
          icon: 'view-dashboard',
          children: [
            {
              name: 'Perpustakaan BKKBN Jabar',
              type: 'item',
              link: '/app/bkkbn/kampung1'
            },
            {
              name: 'Penyiapan Kehidupan Berkeluarga bagi Remaja',
              type: 'item',
              link: '/app/bkkbn/kampung1'
            },
            {
              name: '1000 Hari Pertama Kehidupan',
              type: 'item',
              link: '/app/bkkbn/kampung1'
            },
            {
              name: 'kampung kb',
              type: 'item',
              link: '/app/bkkbn/kampung'
            }
          ]
        },
        {
          name: 'Hiburan',
          type: 'collapse',
          icon: 'view-dashboard',
          children: [
            {
              name: 'Permainan Ular Tangga',
              type: 'item',
              link: '/app/bkkbn/kampung1'
            },
            {
              name: 'Film Pendek',
              type: 'item',
              link: '/app/bkkbn/kampung1'
            }
          ]
        },
        {
          name: 'FREQUENTLY ASKED DATA',
          type: 'item',
          link: '/app/bkkbn/fad'
        }
      ]
    }
  ];

  return (
    <CustomScrollbars className=" scrollbar">
      <Navigation menuItems={navigationMenus}/>
    </CustomScrollbars>
  );
};

export default SideBarContent;
