import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PortfolioCard from '../components/PortfolioCard.jsx';
import Daft from 'https://lh3.googleusercontent.com/fife/ALs6j_F5JgDJqqg8yvZY6rWUZrbLY6zJefwGLmEPslGJp1iyZuaUXAzK-5N8FIRAroTRv1hjQjcixW6ivXxv0eAbEE1ZdSYxq60bw4xykVHm0shF669Ol0uZpd9okvPSKGkhgvI8WGodjkh0heC3hQeF95HJFwrLBDbJLgjtEgwykNMq8gWX_fYV5unAkzTbzHXR0eVFSPsrm1vrqqCGGcL5_VJeiftFHY51RXYM-qMRAq4Dfi1nqFdQa_8PslYhMGol6aoadZP6BV1YS06zmldr523CmmkhaY6JxFeuYNSfjiy0u5TD4AioCxN9fXAfa9Zt6K0hiJJYS51yhwFQD5ax793WGyEz1faUAME1PmDQaoNrfE_gGFEyD4trAWWsLee15mcMr_nHTryw8zqdtLJzyZO7dUwZU-lte7gLnPTYhF2QZnqPP499q_UPZ6rAS_SYEkECjMbbUup-FoiQCjRtf9CtgjIstZ-cwHPkt4TPquPyGs5Vygv5-OwLMVnPgxC9F5ntpM04xhyA-94fV-K_mq34TPoGLvJ8jJ7Vcu3xYOt6PZnMVLArX-Tbyo-T3UeUY3_mMuXB0Tb-2Nmt77smS8Y-2Q-o7mVez4pK71vT0EdBqTqYwPEqg8-3AbpFPMKjPFQH8Tb6LzSrx6sOGFoGJ0IEs8PDcHgAROhhHloONUitJgsLf2KSFJXh1b0b_VNqWin9uKVbttibTvU9PBoTlVZc_SJyPH_jozmmNu1unQXkZtI9ojREaPEwCxfRmarPyrGNY9-IGfz3g8xCAmTbY7Xotgg1QA9EppqbH26HGg9mmIH188pIoXZsmQ3mruFOiKIp24OAPXGBvFotE32ASlKyqd0wSlwqyqoPkEVu-YomScMSZijdCIgBi3D_TVVYWd9oQaOkSQi9cMPKxUToMvWp8D0m3TNo6cSLm0tYm6IC-QdPo6c5a1mymlFQOQ-_-NLhsei7yIHS0qzLxUmz4ANLZnXCTB5VC3omJbDosZkej4k9I5LiBEAaZ0wYOLeoLmgjmgIaMt5ZqYY_mf_6v8X40g6x1_xURDlG2jBzitH2S7Wk2HrnYdZKd1JapCtjjnrU_b8bLk__SPZdwQX1WoSYj6A51v4TbhTqDjJ9k7xevIYF_RHqjhEAC2e7jpXfD_ryDF0A7d1-YWIlNx8P6FEubfrENiAAhRWTWbMKA5xEvInYxQswhBeq-sVBC6V739zc21jmdf6XZ09GN7egA4S6GdiJJ0WLYQAb8cCBG6vp7riTscfB7_TBpRFXDKOp1ew0D-gETv7JkDM_KZNPynUyFWlqI22VHx64-vfomBU4oVnjwcZU1RKRHOjVlFPoGg2fQEfDHDLdrV5t0mrNaSTRKKmDTJ0WPNgQS2Cql67IOk6a23m_L0RFU1yV3tE_d-B5Zo71vz5Ji1DZ9xeEdkFqmCLhUJSlXu7A6-GjipGUtZ9Go4xYxZv7iiihkZe5hyWAb1YOnUiIDORgn_Du9J4zCa8e6inZD1-3mVDg-0Zkov9iytjles7G9dBN1s-P3BkE-RFkTR0pxi84R4ev8JwPeHAmqueCBm4WRDnGzAYY7XDNiZMRH_cCR_xpO4S6kpJawtsKek75HUDDJiVwW3hxqHZgwa6DoQBYQeKezmk2J-PXFGYMWY2DZSAQAaflR4FBphnljad9SK4ey_Qlpp2KhV9-zCJVCIoC7o3FwHpSbKvJn4Q1eZZls453qyTIlwXmc_M=w2000-h2764?auditContext=forDisplay';
import Kdot from 'https://lh3.googleusercontent.com/fife/ALs6j_E-f7tNRK-9HYxrz9-f5gZ3EXtjzgw0GMDtk8qZnGmXyJUsYUmZpDS0smTRZrYAfyD7i5IftdP70T9G8rBj-oNu86xeascGh-bgKDG8cw3FbPBqBixkVsarEKVoW2RCfetaqvbXslQg5Y06uecY1VQ6wJKKMkAgc-G30RemFPLW1yaly0TyC6ijkSDLAqIfIoKkGQ5yByTrsnrYkx1ev8gz70UOiUuaVEAbDr89RqIGyIa271XMFEwSQqU8T5o26O1Yld7lALsSWHvbEwSZ2AIGEZ-0r8OahCNE25hm-jLLl7AmThFOI2qwtU2wSLVYX9lbX3_71IlDN6V-m6WSJxjUSOOzvQNcVwoLoUnA1_ilHWIgE_ropvHT2Cho6kdq3P9unXPD_u75r2cz0VgIGufmv25GQMU-7Rq3FsLEEWoCigqf5tcKW2CKLQ2897qnritF93OX6reFywnMb6Wy5B96iDB_7Y3nlVVjuu4a2qXUZPmWsE-34-XQOyaAns1zq7PqhStg8uq5hL91aq8wR7w8rRk0KxbaMKVwEgIYtixWfz-_yBQG3orR28gGn_WmgyfJ99Xh6ughyL7DEpxlu6h1GnkrcTZCGdOh-j5xQWP3hZifv_GePo2vCY_eH6GKI0Jui_HIC8ndv602AqYrVL1wb5v0xccQ8qwGMRRKQdZ2lA2UdJnHLsfIl3IUjgmB0Iucavta4ZRxQCfjjl5qHudM9ja8OLZzNWL5aDxOCHYpUvL0mh-wCu0DZRKYN8RnvoKq3ytahKNuDCq4hh0YQcMiYCOGjEHrBWOzMjZiZCHKQ6E94oMSDkYWvLKozs1zOulEo2Dxd-407GPDfH6s_PkfcfNhrnsXjXSa0nm_VVv8HzfsQaF7G8_0sLH_tLnCrXtovZVajpemsLpHiZK-w9X51wbUPCU8aRvESfSnMvqx4hOhXIGwmZZwK_dWw3LLkabW2GDi1zFidD7H0o2lrugPNKNu87QEvjjhYLTy9PW9w2fL7BlVbSDrgSkdTklETfALZVCqY-YFRXK4EcfncY6bDXjaK8G6Sd_gjv2YCquU4WGSLVdR7NIOSGwadtAg2BQ7ie2pMj49pnI3HTaq9UVQqOH1Gh7G7kW8BlIYHeZIFoiZwX8CRE1NW-zsO2_8O8oEbH6qIVeZZ10no6DVoU8ZyW_5VqkWe0Ft9ZJw2RmceTOGkTxwI0OVNDxIqpPbn9IzSTmWJGta3Bgm5caZhFzkCzcI-l_GqiZENyIja2yCaSR_LN0mKVqSeP6rqMeHnFlKdT0B2ZVM3H1mL6nHdRGnPgpd-fQmGV3MOEohP9Z1vVmKeVS8qQjlDwwuEckpedEm0ILKtIeQ2cnVvYrGzdLmmwb1IrDRcDdEJC3Ax50pVK3R9tu_cRv6qy77pW742daSNnfsk_cWay7rUqvyGnhbXBw5RYpQ9qTR-33f5fQ0iwVapT0cJ3QRNLSHZIsXevry77HyD9j9wdQyJf83PD780G15dX6sgFJnwOwyiTZza9ig39_cAHSUtGP_SLoRXxC1dS1p_MQS70LoiyqiYymBqowGsmpgI-oX8X-zyRJcNUPAh_exdk_qtHs4U2SgBjs-Og6TJM3eGNFfVhPYSl13ixqruG_mpjYlr3OWcw6owwMAEyceBUYwEnSHl0bVFrFQVE2htzeyHJ9WCrAA3Ypd2ja3umkmfT3Zamr_vNw-J7-lqWhfVPf91u41ISV0_9k6fZc=w2000-h2764?auditContext=forDisplay';
import Rocky from 'https://lh3.googleusercontent.com/fife/ALs6j_EvrmbXFG5lDW3HLhCH3tIrhaLxgI4ZXvUKSzJFXT22mmD3MCq3UyoBkgOe5SzPLuTkzfZHA4hi3O6OSK-KIQEZL7FkP3vDT70GC4FvGGJpo2dnPZySglonrlyEh_a0_fvT0AnlE4dX3cLAFEIYxlGFs6Ev2M_sxL-L38SJZeieARux6tGDZf3aYqNcifXJNf7I7MCZTiwf638lIgQRqTlxWHO_7FKzT4T4geXEYzIaMhmvk5FTC58joZD2_vwf2DV0A1brGeCDsdskDdRgsnCHZdz8GPAEv6zZ7NQ_2Ctn44LD9XeTitCN9H2qgopL59Boi6NTFYQKCs2pWcpSOpNL1nNaDPuzSHqN6rtbAWOOeOeU16Zlp6r9Ajar6gjItLRlHcAlvrmKNhQrfxzBz6n5v7kwuMnNLnZ7lWPHWDfnZEzeZmVULZngBMAhvQeFkRtU8eDTefD-Lh4MHOZmqswvMTzFkCSedAHW4sXLcV3URPWhdZa7rjBePXOUuIDq7ZfSGjybKw3i57EqLcO4W0OE_trIZ3cwJoFHLH_HLWUjVzk92AoNHF3OPrjqDaYptvWp9LAb0HY-6O4Vcgz77O9F1XEhv2Bq0RF7-p82TclFI4YI7lv7Yr4Fgs4INVchv0v2t0QAJTuwrBj6z-mEYvfj9yY4avse62kJ_XS3xvK4rG4xkj6gCWoFtlM4nmcc9PQh65raE6AwLPr1TR0VfUykVTC-JXO6UI5bODMFAVqrExirFvyPrtasSMaMYfmXf0BljixvSJ6VA0PNjn7FoJDLHa8n67D1hEbFLRYIIwJEVvEVyUtEGFd9U67U-PX0MN2ugJUiMcwNFz_3l6BPAMnSNUS7v-MWYqYu6i6XJAUUfK5aNlQ1Mse61lID_MO9V9uBZQKMZZ4A1VRBrh7R6MpAlIT6X-J7FtzCFryP_61923CIjUNkSulfeMEGayR2b9dxnluP20Vhu69iNYA261yuapHZwWY4TkmT06OoKRK-d_QR3LNL3mMG5t_bX1A7XXfTVHmnJYa6OfZFw8QX2KFxjYAuhUaavKxnBopTrTNTaJ9X_9GjHgXvhpXD9ykvkvfSnO_gBl0FwI1BVfcdHkqQA7q33otx2Zw4Mf3Zxinyyh2pUOm9YY-_AForuTHv0Bo7vo-NQB7eGhMLcQEYYorD7G13_oSvpjGG0h2QqTxPuSn6fONAbqBYAiXl8-EBi5CUVvm-2doxdFGiRCTRVgRrzuS0NzfDVBwvlLXgOymp9EDiWD4tKy-3Wq8M0ppDt42haGbB3XgsKq-zdz71V_89TjoQX3DwICBYKD2qAutTfxaoA3Slctvdxl06AfwD3ONrnuJJ1WBQWh54FhVjz6ncgUwF-6s2C_DgD_w7S-QIes1mRCBi0F3NYfxuLYGuVywlg1bnK5qSKo9VPcoY7mk8AKlT9wUUY8XeNRKs4tzLbhnyD3wnY4eN0LQiqzxpxcGN6pVkb2lGWu_6Y5mUn8PUoJMOsi1-a-_LUubJmADFnuAHH1HwKGlmtdlBGKz7mm3lw2SvTfeStkbQhCOi-qrW-MiWFjy4YJO58W8CRjibbQBqhZ1zglLjba6lQVzlFRCi9QKwqgw1ujefyJ7UbirARXGbfYztwtnC_55QtlFuLpuq9UPGrOlVfwvQB3aDaXMK42xUuRoObMBnyQl94lh7PFBRLOb60ueMEBrJYvslzt6y1RVLcc_Y7wZf8byiLzWLB38=w2000-h2764?auditContext=forDisplay';
import Porsche from 'https://lh3.googleusercontent.com/fife/ALs6j_EWvoEQv8EeSs2N4fI7L7TFheMmS5x4ujUVSIdDiANhfNetmbKyvhHE_z2Dz6X-scHfaQ8bKSeen2I6lMqApu8FqtvJsnCgbqVR8uPKS2L47NwQi4S59cFEfec3QUwZLUIehYaeF65npgM48XKxoPHCoCzuLvkKFm9UOwQVqCxv-kpnp3GEfrBEzlFEoSHkGTNC19fLwV09y6Rodje3rdrF05_Twn-pgMFnTFLVtYU_LVJIm1M9dSvbdM5MUXshs3_uxbHMMXPb8Lqu_G_739mDNTOGH2wp-8rE6NgblbFI4-kPXfpQMhznldB5bkpxvIkv65_heLaIh4XlDkPTSND3jBynRa2ixFXnT_P-Ok22lFL2C_dPNVyT9edbMNF9hY7bsAR8Zr-pve0U64vS1ZQ3T29Eq3q_F-UkJGowuKLhWsWQrhIiCcnr291otuCFFemZVxchUjjtqmZQ_ZvML67BMkNiRk0gmsuxzrFnAN2APbyaypBcliCkvX3Yytfv2E2ha23RY70OilAu3zJxffbVoWeOiQ9_JDikwHTC28UAmS_BcJq_kH85w_GRgTNt2eZtnj9PpCl8aGcsIBQU-nAr9fRUry4K3Z6QTbXifQfnlBgYLPmx7akgugwOfnRKIML9YF-fkI5RqOHfUqjmSjswOnlQheck2Wv0ZENZPaxqq8phrXJMd4MJmZ8BFAYfK9CzRXnAg_suy_RO14P4ylsMBZcwsGz7i9tPEZkhrT3zFTP_FqmYMMG_dYiJpG1v7z4vLHZN50MVHZXq7dHSmXN5kL83x_-pGs1UkxFrWx-jXWrZV_Jqac2SlL4U0fGhg7ymv83XBcnraYoOop3blWdZzdF-UcQklWZejBG1rfJTvOm-ZnnVDwi141tH58P09co8agZCFMu7fQmD4z3ES8l58g1EjofAVHuYkGo8Yb5bDuD-h74ruaqGWATkrRfzRGRjKJ15BWPYrngl-U-1O-laJHfLuQXj1_A9NR_lRF_BCqaBrXvIjDuCp_ZU_Lm4W7Pk6ZEIipavgKh31ZXzWnGhFqFJ_gUAaKYndpbelWI8o9Fkm6tEMOTFEdMY5zOySWzl811XzqjfHjsNv9vKZWScSZvJJYZd6VhDxEsgYbnaHuAH9s-jndfwMVyEKe3n1XEPHfXWOvXxMXP_TPU01XREWWdvlh_FD96uQ3XCyEka8ce3qSeQ-Zg3LgD8ZnmPX03RhodBor2CLrPwei_pnSMpy5wLKyXVdbpEWBBY_XB7WLA9fEPW0ZmuAuiqTekEJmOm7zpKwFisMcdpE-aE73JwZurReOSaQbCy1kpDTLvxtU8HjNiW6NRSrdT-4_H4Uou3jfu0vt7peRBIWwlTkd4M4vxZEI8VF4NuCrxg2IZH0Udro8RVT8pre4o15z-f09YnpKCJy7NX-4iCJP35edOsb906xLbhdzcp33YTK27fqlJ68j4p8nJFFXbjNBv0_kjJOoB34Ro5aEzko83I4pEKXXk2wKR3YsKrhWokptx-sOzAfuq2Hjf2Q3uyudNXxbnVqhCsv6dszEL28Ar5bUzdQ9mZq40waXX21BK6HMdvimOAMfj1WhiNR2xdSR4R6IevtCDk2uDt4qkUWj_N2E5K46gd_WgO48optb0b0bODE0jNHsem3bnToekvWlkSYOpKcU1B6-Txfp9GMADn2wLkr77q7seuWJ9fjL6bEeZ6gmUcftSx3-X02gPq_LWz_VOWPLM=w2000-h2764?auditContext=forDisplay';
import Val1 from 'https://lh3.googleusercontent.com/fife/ALs6j_GALlKRlNJa1uv70rBlb011o9GH_7MVWyMHgl3XKmTK-HwLCCMtAgf9S_DtbwMeP1fjcsTK-PNcMYqowox9IlFtgd8A38787CtsjGgcEhUlp9rvM91akeRKJ0qGASy5cwNiBgBgwwUecVTugdyuAJg_br4CKKq0_xu2fsdzOhxjkWpwbmsokckQkzisMuLT2oHnrI-_3XG2FVO4Uy1o7b-Gvbrb2kcUbnLtjBp5X9UdPwTDttFeIkcRFh-_Lwu3ESgJr3A9lJ9dNvhc9ZjE8xutUc1qHwkWN2_XYpLxNXrraJCAWIS6pN3brSJ3MFNdtFOsSQTcW-QHSrTskB65pxLlh4pEHvpGNPvDo4G2K0RAJzHR6OMPnD3DHo6wadQCcnr2ut0USEaCxI6XYt9u03pc0QwM6zn-U5FgDGnJDHrRZAYmTITtyhGcGMUqOlkJP7JSZrBNV_R_zKthDUUGpwPGb5-nnPo7EIIYBwoWPMZVVqeSsS8lbiQaT9e0Q3b2avgt3IhuDKY5gMQ1p4EFqFUGPDCwmM0DpN273jd3XD_Ld664CGuYxUQnFuOWmij4z_I3GZnfVdcJ2fihQswOVa79ZV-K0RzEZ3PKCvR-GIxzSm1AMlpq03TpKxtXmLkIZt8r6nPnZvED7xxKR5wh4NomL2LwUdRYTbLAduT9af7YxGDMvOmvQ_l8_2uCIL5z73psKZsWhtkWwCuIyP6u4AGZmraDhSiKHvLk6SRCS7iF8kZpFPD4UvfTcFbGAFdAirz3J38Z9kw1mdkRpvre79UwhAPCjZMK30nKpsOZBC_6eaK2mnwM1U8DOJ7bAr492JFhUx0akkn3pXCKhVhYSTVOFpUTXb7nPDYjZqrwjK2gQg3DAzACD7byI0K33rdzqTaVPEKt11u_0w_N7pPH8HjX60oD4cE1jYZ0nNBaIjKIEP_2-1cjzUc_eSifWrcEy1_eI0BoWa4rIuMzckFn31DlFegu2i6H268Os8Kq72mJ3gPiVxgqjhimqFFy_hvxBZntAKFskjT1zWKBFNkA5f5jBO4hcPwd3Qeqnw2_Ej9WB2ODXGG5_mXr6nooTtAKcL_DID1I20IKePu0T6MHtErIqkwb1Z2fRP5HKK1ByzigJlfJHc5swVIwXWvM35d-pGjdE4k7IM6gWI9qArXvdw4E4AFw-rg9QFw87X5m2l_pf1TG3b5IcuY-BKtdTM_Qxw470KsmANPHVSOADYHGwxchLHyyR_6xrvkXnAN5IM9nkDO4Ho_JOPptQPRDSVnbuJfePa1RzI-17fCFiMo_BulQyJf3s9iHpQiVZaYoVn9foGjP3CMJ2UE9yMLEKTRnRLOv_VTFnFCEbhem-xiv9cjvAAHBpAD51amEvyZvpOG5iLUDVTZSXClvIONZg9PJoRKOUzbfTRD-sCdMINE-hir5Xz2AVr22TAyQgMq1QbdgSF-OYJPcURuAnDQGi3o5AskMgd_ADjaeKk80q6U2g0kJbryjRyeoHkB4v5-Ws0VVdbCh0rBtUOyryB1VceeNpHaL0a1bxPH_40jwU7X1t_md9E9NarcptqVj-lOD9fUlEyF2dseoMwA8OwvI1mo5OFn3n6ui1Gl2qg1jWXt0-2KQ-eWE63Fwt849XzHu3Hepwu4yRzg2TplXQatOImwiHIMnDagyf9Xa1xv7xG3qC1Nl9FKqHYTzNopGMDwxjflAzLkhQXHBdGThDPypuUlpWggJaEA=w2000-h2764?auditContext=forDisplay';
import Val2 from 'https://lh3.googleusercontent.com/fife/ALs6j_FYm5o-xqInIu8HFxxPnZHtJ-6W3BP_tA8dCL7Bdrp_s3EG1MC8JUDqUDgEc1mzmjsEc0mSUGLPtpxwDYQu4YcggtyyUZAQEW2KV1AH4gEyhhEPC8y_O4JkSQkedG42TPyl-RWMqcjvpqz0wxDCJWmMLgU2RYo0NWYwVOazJw1-jVzDB5QLVII4pIm3oZMEuMTC6Ff-yIvrit50Vd-lRhBz-sNxHVkkXIkfsgJDxLkWb5EopZT5p-faMZ5E_Ug_vsXQOsLKS5-I2krt8S1P_w4xSdNHCJBN4XvAiYtfp7BsGLgIwTI6ZzJUmRwhC1pjm1JIN9yMK2lbsMYe1HOHRC9Qiw_65PJG0igow52iWoua4rEfyUPZRZXUJ7guP-x8segpFxKWsldkXgNGdFscSqlnk57nafTczYllC0tpDTHhBflHgRYHiQi1NYhD7hg0lJWhYR0rbXwnv9wCNeNtLfdBpb9j5M3PAWv3hvXC3qVVCRDuz_z7GDuNodgGwn8KBVO_jZ4ipncawtT70S-bHdtt-PMl_ucXlch8rPPFf8bKdSGerH3T-Gguajq-qrgrMWWEV7Zo8NmEVIcK6dSZc_qki-PWMHdUXSRBP_rtJXcJvayJi62s7_D7L-6ktIF6JhMC5nDLsSmszZdgd09Jv_z8_RLa7p9lYFZd4EW4FwQ4CeGu5RkjaqPYkEEUUaMW6LxCbnyGrMqDYO8TB-V9VJfAB-4ppk8lzkdxbIRp28weEl7h0rAiZAGTXjEwpapXyqvG8WXc2MW9oWLUxBRvWGNn7ky79_na7tMCxoouJVF0IGy6HyLnBopN_zw5PXRuwNV97JdssMR31CxmmpJOEER2d0dwRBZ5A3yyjw55WSg5Y1lARhHGvcVd8M-aQB5Hk5mnlJUQt7Svf52BGS2zSrxrA6wDOrHd1q0UdLgc_7yWzIt8DiZclmoAIygIlGfwaIu8vrqKOO9Ww4k1nT1zwN-ZxkMHJ_xDhT4k-R2CiG13HMpoRwM9zQ9sU5Go42UGUQE0P39CUTJ4zMPMKnXjMr_bROHvNBHx0i4CPT0SPGHrwhyZkdTHF3yE9jfLh9pK8_wZgWm-sO_zwip5Zjse6CGFGcS71xx9WsLPr4IMBb-QSVjOl387AkRS2ghRmwaqNdmNkzdY3BL6tcnsgG_oHqHG9P-IsNPcnqaKSm1sWiGGit1AHvDm2z2yvudn7Sf71c_qpuJW3mfiub7oTPzIQqcbRuzKZNct1f5xfci6rQ4mIv5KT0LKu_4DT6jXlznmuhy6AeivE2QYqGP_RR_tzKU1jR2Y-uOoRKkS_mv6vu13zssZ4M_vh0wu9KGOwC33DKDBy9oV_YEvW0u_xkZ78ctgEtSCxjp1JyOMdu0JxuNT05mg2nwsPz18BRYo9s9t05efOfQgms6TyMjJJXjAIpsxeBo_hrrBdV5cX0-M3X2DmzMi1s-JfugeHHmGzAgGO48MgqiB3m5OZRcv3-o2HspgyrYcGoS_XokZ2PnkNIg5PvOltdEuGFtv-touEa8FD1R2lEPzfI3uN8KVMSuv3FyQXKXzbGxQvmUgTU-9MtMmOBeivEDB_zPMAb0MupZMaoqZaYIxNbVa4S5VGKoEytFjb2PwUncSmXYK96F24p-w8AyitJE6XtaaTV7-BJZIEexC9NDrs7KP1kytlVvtTfWZ1grfqeEMBTdkY_OVDefxX6Rj1SNKABqKdsMQv-LYyei90rg=w2000-h2764?auditContext=forDisplay';
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={`${className} custom-arrow`}
			style={{
				...style,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				background: 'none',
				border: '1px solid white',
				borderRadius: '50%',
				width: '40px',
				height: '40px',
				cursor: 'pointer',
				position: 'absolute',
				right: '-3rem',
			}}
			onClick={onClick}>
			<ChevronRight color="white" size={20} />
		</div>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={`${className} custom-arrow`}
			style={{
				...style,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				background: 'none',
				border: '1px solid white',
				borderRadius: '50%',
				width: '40px',
				height: '40px',
				cursor: 'pointer',
				position: 'absolute',
				left: '-3rem',
			}}
			onClick={onClick}>
			<ChevronLeft color="white" size={20} />
		</div>
	);
}
const Portfolio = () => {
	var settings = {
		dots: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: true,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};
	return (
		<div className="bg-zinc-950 text-zinc-100 w-full flex flex-col items-center justify-center px-12">
			<div className="w-full max-w-7xl flex flex-col items-center justify-center mx-auto min-w-[530px]">
				<h1 className="font-times font-semibold text-2xl sm:text-3xl lg:text-4xl  text-center py-10">
					Portfolio
				</h1>
				<ul className="flex text-center font-times gap-8 text-base md:text-lg lg:text-xl">
					<li className="underline underline-offset-8">All</li>
					<li>Branding</li>
					<li>Mockups</li>
					<li>Web Design</li>
				</ul>

				<div className="slider-container w-full max-w-[22rem] sm:max-w-[30rem] md:max-w-[38rem] lg:max-w-[55rem] xl:max-w-6xl py-20 ">
					<Slider {...settings}>
						<div className="w-full aspect-retro px-1.5">
							<PortfolioCard
								image={Daft}
								title="Daft Punk"
								type="Graphic Design"
							/>
						</div>
						<div className="w-full aspect-retro px-1.5">
							<PortfolioCard
								image={Porsche}
								title="RWB"
								type="Graphic Design"
							/>
						</div>
						<div className="w-full aspect-retro px-1.5">
							<PortfolioCard
								image={Kdot}
								title="King Kunta"
								type="Graphic Design"
							/>
						</div>
						<div className="w-full aspect-retro px-1.5">
							<PortfolioCard image={Rocky} title="A$AP" type="Graphic Design" />
						</div>
						<div className="w-full aspect-retro px-1.5">
							<PortfolioCard
								image={Val2}
								title="Cupids"
								type="Graphic Design"
							/>
						</div>
						<div className="w-full aspect-retro px-1.5">
							<PortfolioCard
								image={Val1}
								title="Hearts"
								type="Graphic Design"
							/>
						</div>
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
