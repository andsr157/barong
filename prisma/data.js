export const DATA = {
  USERS: [
    {
      name: "andika",
      password: "andika123",
      email: "andik@gmail.com",
      telp: "85842106413",
      avatar: "/assets/dummy-profile.png",
      address: "jombor",
      role: "user",
    },
    {
      name: "july",
      password: "july123",
      email: "jyuly@gmail.com",
      telp: "85842106413",
      avatar: "/assets/dummy-profile.png",
      address: "jombor",
      role: "user",
    },
    {
      name: "dwi",
      password: "dwi123",
      email: "dwi@gmail.com",
      telp: "85842106413",
      avatar: "/assets/dummy-profile.png",
      address: "jombor",
      role: "partner",
    },
    {
      name: "hasan najib",
      password: "hasan123",
      email: "san@gmail.com",
      telp: "85842106413",
      avatar: "/assets/dummy-profile.png",
      address: "jombor",
      role: "partner",
    },
    {
      name: "saputra dwi",
      password: "saputra123",
      email: "saputra@gmail.com",
      telp: "85842106413",
      avatar: "/assets/dummy-profile.png",
      address: "jombor",
      role: "partner",
    },
  ],
  ADDRESS: [
    {
      label: "kost",
      address_name: "gabahan, sukoharjo ",
      detail: "dekat perempatan",
      owner_name: "andika",
      owner_telp: "85842106413",
      latitude: "1113334455",
      longitude: "111226677",
      user_id: "USR1",
    },
    {
      label: "sekolah",
      address_name: "gabahan, sukoharjo ",
      detail: "dekat perempatan",
      owner_name: "july",
      owner_telp: "85842106413",
      latitude: "1113334455",
      longitude: "111226677",
      user_id: "USR2",
    },
    {
      label: "kost",
      address_name: "gabahan, sukoharjo ",
      detail: "dekat perempatan",
      owner_name: "hasan",
      owner_telp: "85842106413",
      latitude: "1113334455",
      longitude: "111226677",
      user_id: "USR3",
    },
  ],
  TRASHCATEGORY: [
    {
      id: "CTR301",
      name: "Plastik",
    },
    {
      id: "CTR302",
      name: "Besi",
    },
    {
      id: "CTR303",
      name: "Kertas",
    },
    {
      id: "CTR304",
      name: "Cair",
    },
    {
      id: "CTR305",
      name: "Elektronik",
    },
    {
      id: "CTR306",
      name: "Alumunium",
    },
    {
      id: "CTR307",
      name: "Botol Kaca",
    },
  ],
  TRASH: [
    {
      id: "RSK101",
      name: "botol plastik bening",
      minPrice: 500,
      maxPrice: 1000,
      category_id: "CTR301",
    },
    {
      id: "RSK301",
      name: "kertas hvs",
      minPrice: 300,
      maxPrice: 700,
      category_id: "CTR303",
    },
    {
      id: "RSK201",
      name: "paku bekas",
      minPrice: 500,
      maxPrice: 1000,
      category_id: "CTR302",
    },
    {
      id: "RSK501",
      name: "tv bekas",
      minPrice: 1000,
      maxPrice: 3000,
      category_id: "CTR305",
    },
  ],
  STATUS: [
    {
      id: "STS1",
      name: "searching",
      label: "mencari pengepul",
      status: "active",
    },
    {
      id: "STS2",
      name: "taking",
      label: "diambil",
      status: "active",
    },
    {
      id: "STS3",
      name: "finish",
      label: "selesai",
      status: "active",
    },
    {
      id: "STS4",
      name: "finish",
      label: "selesai",
      status: "success",
    },
    {
      id: "STS5",
      name: "canceled",
      label: "dibatalkan",
      status: "success",
    },
  ],

  NOTIFICATION: [
    {
      title: "Transaksi Diambil",
      description: "Transaksi diambil, pengepul menuju ke tempat anda",
    },
    {
      title: "Transaksi dibatalkan",
      description: "Pengepul membatalkan transaksi , mencari pengepul lain",
    },
  ],

  CHATS: [
    {
      user_id: "USR1",
      partner_id: null,
    },
    {
      user_id: "USR2",
      partner_id: "USR3",
    },
    {
      user_id: "USR1",
      partner_id: "USR4",
    },
  ],

  TRANSACTION: [
    {
      user_id: "USR1",
      partner_id: "USR3",
      chats_id: "CHT1",
      address:
        '{"label":"sekolah","address_name":"gabahan, sukoharjo ","detail":"dekat perempatan","owner_name":"july","owner_telp":"85842106413","latitude":"1113334455","longitude":"111226677"}',
      image: "image.png",
      status_id: "STS1",
      partner_rate: 4,
      partner_review: "baik sekali",
      note: "andika ganteng",
      total: 0,
    },
    {
      user_id: "USR2",
      partner_id: "USR3",
      chats_id: "CHT2",
      address:
        '{"label":"sekolah","address_name":"gabahan, sukoharjo ","detail":"dekat perempatan","owner_name":"july","owner_telp":"85842106413","latitude":"1113334455","longitude":"111226677"}',
      image: "image.png",
      status_id: "STS2",
      partner_rate: 5,
      partner_review: "baik sekali",
      note: "andika ganteng",
      total: 0,
    },
    {
      user_id: "USR1",
      partner_id: "USR4",
      chats_id: "CHT3",
      address:
        '{"label":"sekolah","address_name":"gabahan, sukoharjo ","detail":"dekat perempatan","owner_name":"july","owner_telp":"85842106413","latitude":"1113334455","longitude":"111226677"}',
      image: "image.png",
      status_id: "STS3",
      partner_rate: 3,
      partner_review: "baik sekali",
      note: "andika ganteng",
      total: 4000,
    },
  ],
  TRANSACTION_DETAIL: [
    {
      trash_id: "RSK101",
      price: 0,
      weight: 2,
      transaction_id: "TR1",
    },
    {
      trash_id: "RSK301",
      price: 0,
      weight: 2,
      transaction_id: "TR2",
    },
    {
      trash_id: "RSK201",
      price: 1000,
      weight: 2,
      transaction_id: "TR3",
    },
    {
      trash_id: "RSK501",
      price: 1000,
      weight: 2,
      transaction_id: "TR3",
    },
  ],
}
