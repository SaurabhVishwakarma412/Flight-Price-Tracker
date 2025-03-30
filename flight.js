const flightData = [
    {
        "source": "Telangana",
        "source_airport": "Rajiv Gandhi International Airport",
        "destination": "Maharashtra",
        "destination_airport": "Chhatrapati Shivaji Maharaj International Airport",
        "date": "2025-04-20",
        "price": 7650
    },
    {
        "source": "Assam",
        "source_airport": "Lokpriya Gopinath Bordoloi International Airport",
        "destination": "Uttarakhand",
        "destination_airport": "Jolly Grant Airport",
        "date": "2025-04-22",
        "price": 13827
    },
    {
        "source": "Haryana",
        "source_airport": "Chaudhary Charan Singh Airport",
        "destination": "Nagaland",
        "destination_airport": "Dimapur Airport",
        "date": "2025-03-30",
        "price": 14397
    },
    {
        "source": "Madhya Pradesh",
        "source_airport": "Devi Ahilya Bai Holkar Airport",
        "destination": "Chhattisgarh",
        "destination_airport": "Swami Vivekananda Airport",
        "date": "2025-04-21",
        "price": 13753
    },
    {
        "source": "Odisha",
        "source_airport": "Biju Patnaik International Airport",
        "destination": "Assam",
        "destination_airport": "Lokpriya Gopinath Bordoloi International Airport",
        "date": "2025-04-11",
        "price": 8851
    },
    {
        "source": "Manipur",
        "source_airport": "Imphal International Airport",
        "destination": "Rajasthan",
        "destination_airport": "Jaipur International Airport",
        "date": "2025-04-03",
        "price": 12581
    },
    {
        "source": "Assam",
        "source_airport": "Lokpriya Gopinath Bordoloi International Airport",
        "destination": "Bihar",
        "destination_airport": "Jay Prakash Narayan International Airport",
        "date": "2025-04-21",
        "price": 3598
    },
    {
        "source": "Bihar",
        "source_airport": "Jay Prakash Narayan International Airport",
        "destination": "Assam",
        "destination_airport": "Lokpriya Gopinath Bordoloi International Airport",
        "date": "2025-04-21",
        "price": 5513
    },
    {
        "source": "Bihar",
        "source_airport": "Jay Prakash Narayan International Airport",
        "destination": "Uttar Pradesh",
        "destination_airport": "Chaudhary Charan Singh Airport",
        "date": "2025-04-20",
        "price": 10135
    },
    {
        "source": "Arunachal Pradesh",
        "source_airport": "Donyi Polo Airport",
        "destination": "Punjab",
        "destination_airport": "Sri Guru Ram Dass Jee International Airport",
        "date": "2025-04-07",
        "price": 14787
    },
    {
        "source": "Telangana",
        "source_airport": "Rajiv Gandhi International Airport",
        "destination": "Chhattisgarh",
        "destination_airport": "Swami Vivekananda Airport",
        "date": "2025-04-10",
        "price": 11745
    },
    {
        "source": "Nagaland",
        "source_airport": "Dimapur Airport",
        "destination": "Uttar Pradesh",
        "destination_airport": "Chaudhary Charan Singh Airport",
        "date": "2025-04-13",
        "price": 14566
    },
    {
        "source": "Jharkhand",
        "source_airport": "Birsa Munda Airport",
        "destination": "Punjab",
        "destination_airport": "Sri Guru Ram Dass Jee International Airport",
        "date": "2025-03-25",
        "price": 6560
    },
    {
        "source": "Uttarakhand",
        "source_airport": "Jolly Grant Airport",
        "destination": "Maharashtra",
        "destination_airport": "Chhatrapati Shivaji Maharaj International Airport",
        "date": "2025-04-08",
        "price": 12674
    },
    {
        "source": "Bihar",
        "source_airport": "Jay Prakash Narayan International Airport",
        "destination": "Tamil Nadu",
        "destination_airport": "Chennai International Airport",
        "date": "2025-03-28",
        "price": 6666
    },
    {
        "source": "Arunachal Pradesh",
        "source_airport": "Donyi Polo Airport",
        "destination": "Punjab",
        "destination_airport": "Sri Guru Ram Dass Jee International Airport",
        "date": "2025-04-23",
        "price": 14976
    },
    {
        "source": "Manipur",
        "source_airport": "Imphal International Airport",
        "destination": "Kerala",
        "destination_airport": "Cochin International Airport",
        "date": "2025-03-30",
        "price": 4539
    },
    {
        "source": "Rajasthan",
        "source_airport": "Jaipur International Airport",
        "destination": "Karnataka",
        "destination_airport": "Kempegowda International Airport",
        "date": "2025-03-30",
        "price": 10143
    },
    {
        "source": "Assam",
        "source_airport": "Lokpriya Gopinath Bordoloi International Airport",
        "destination": "Arunachal Pradesh",
        "destination_airport": "Donyi Polo Airport",
        "date": "2025-04-09",
        "price": 4965
    },
    {
        "source": "West Bengal",
        "source_airport": "Netaji Subhas Chandra Bose International Airport",
        "destination": "Maharashtra",
        "destination_airport": "Chhatrapati Shivaji Maharaj International Airport",
        "date": "2025-03-26",
        "price": 12703
    },
    {
        "source": "Tamil Nadu",
        "source_airport": "Chennai International Airport",
        "destination": "Maharashtra",
        "destination_airport": "Chhatrapati Shivaji Maharaj International Airport",
        "date": "2025-03-26",
        "price": 5974
    },
    {
        "source": "Uttar Pradesh",
        "source_airport": "Chaudhary Charan Singh Airport",
        "destination": "Uttarakhand",
        "destination_airport": "Jolly Grant Airport",
        "date": "2025-04-08",
        "price": 10805
    },
    {
        "source": "Meghalaya",
        "source_airport": "Shillong Airport",
        "destination": "West Bengal",
        "destination_airport": "Netaji Subhas Chandra Bose International Airport",
        "date": "2025-04-16",
        "price": 3903
    },
    {
        "source": "Telangana",
        "source_airport": "Rajiv Gandhi International Airport",
        "destination": "Maharashtra",
        "destination_airport": "Chhatrapati Shivaji Maharaj International Airport",
        "date": "2025-04-12",
        "price": 12990
    },
    {
        "source": "Madhya Pradesh",
        "source_airport": "Devi Ahilya Bai Holkar Airport",
        "destination": "Jharkhand",
        "destination_airport": "Birsa Munda Airport",
        "date": "2025-03-25",
        "price": 11898
    },
    {
        "source": "Tripura",
        "source_airport": "Maharaja Bir Bikram Airport",
        "destination": "Tamil Nadu",
        "destination_airport": "Chennai International Airport",
        "date": "2025-04-15",
        "price": 4642
    },
    {
        "source": "Bihar",
        "source_airport": "Jay Prakash Narayan International Airport",
        "destination": "Mizoram",
        "destination_airport": "Lengpui Airport",
        "date": "2025-04-02",
        "price": 5790
    },
    {
        "source": "Andhra Pradesh",
        "source_airport": "Visakhapatnam Airport",
        "destination": "Himachal Pradesh",
        "destination_airport": "Kangra Airport",
        "date": "2025-04-04",
        "price": 12842
    },
    {
        "source": "Odisha",
        "source_airport": "Biju Patnaik International Airport",
        "destination": "Punjab",
        "destination_airport": "Sri Guru Ram Dass Jee International Airport",
        "date": "2025-04-03",
        "price": 6680
    },
    {
        "source": "Assam",
        "source_airport": "Lokpriya Gopinath Bordoloi International Airport",
        "destination": "Chhattisgarh",
        "destination_airport": "Swami Vivekananda Airport",
        "date": "2025-03-26",
        "price": 5488
    },
    {
        "source": "Telangana",
        "source_airport": "Rajiv Gandhi International Airport",
        "destination": "Manipur",
        "destination_airport": "Imphal International Airport",
        "date": "2025-04-14",
        "price": 12699
    },
    {
        "source": "Tamil Nadu",
        "source_airport": "Chennai International Airport",
        "destination": "Rajasthan",
        "destination_airport": "Jaipur International Airport",
        "date": "2025-04-10",
        "price": 7330
    },
    {
        "source": "Telangana",
        "source_airport": "Rajiv Gandhi International Airport",
        "destination": "Madhya Pradesh",
        "destination_airport": "Devi Ahilya Bai Holkar Airport",
        "date": "2025-04-15",
        "price": 11845
    },
    {
        "source": "Himachal Pradesh",
        "source_airport": "Kangra Airport",
        "destination": "Kerala",
        "destination_airport": "Cochin International Airport",
        "date": "2025-04-22",
        "price": 4887
    },
    {
        "source": "Odisha",
        "source_airport": "Biju Patnaik International Airport",
        "destination": "Arunachal Pradesh",
        "destination_airport": "Donyi Polo Airport",
        "date": "2025-04-01",
        "price": 10138
    },
    {
        "source": "Odisha",
        "source_airport": "Biju Patnaik International Airport",
        "destination": "Andhra Pradesh",
        "destination_airport": "Visakhapatnam Airport",
        "date": "2025-04-07",
        "price": 14912
    },
    {
        "source": "Chhattisgarh",
        "source_airport": "Swami Vivekananda Airport",
        "destination": "Goa",
        "destination_airport": "Dabolim Airport",
        "date": "2025-04-14",
        "price": 6824
    },
    {
        "source": "West Bengal",
        "source_airport": "Netaji Subhas Chandra Bose International Airport",
        "destination": "Gujarat",
        "destination_airport": "Sardar Vallabhbhai Patel International Airport",
        "date": "2025-03-31",
        "price": 14782
    },
    {
        "source": "Rajasthan",
        "source_airport": "Jaipur International Airport",
        "destination": "Mizoram",
        "destination_airport": "Lengpui Airport",
        "date": "2025-04-03",
        "price": 5185
    },
    {
        "source": "Manipur",
        "source_airport": "Imphal International Airport",
        "destination": "Karnataka",
        "destination_airport": "Kempegowda International Airport",
        "date": "2025-03-25",
        "price": 10378
    },
    {
        "source": "Tripura",
        "source_airport": "Maharaja Bir Bikram Airport",
        "destination": "Bihar",
        "destination_airport": "Jay Prakash Narayan International Airport",
        "date": "2025-04-05",
        "price": 10176
    },
    {
        "source": "Meghalaya",
        "source_airport": "Shillong Airport",
        "destination": "Tamil Nadu",
        "destination_airport": "Chennai International Airport",
        "date": "2025-03-27",
        "price": 5471
    },
    {
        "source": "Kerala",
        "source_airport": "Cochin International Airport",
        "destination": "Tripura",
        "destination_airport": "Maharaja Bir Bikram Airport",
        "date": "2025-04-08",
        "price": 7332
    },
    {
        "source": "Manipur",
        "source_airport": "Imphal International Airport",
        "destination": "Uttar Pradesh",
        "destination_airport": "Chaudhary Charan Singh Airport",
        "date": "2025-04-23",
        "price": 10890
    },
    {
        "source": "Maharashtra",
        "source_airport": "Chhatrapati Shivaji Maharaj International Airport",
        "destination": "Bihar",
        "destination_airport": "Jay Prakash Narayan International Airport",
        "date": "2025-04-18",
        "price": 4599
    },
    {
        "source": "Uttarakhand",
        "source_airport": "Jolly Grant Airport",
        "destination": "Goa",
        "destination_airport": "Dabolim Airport",
        "date": "2025-04-15",
        "price": 3013
    },
    {
        "source": "Karnataka",
        "source_airport": "Kempegowda International Airport",
        "destination": "Uttar Pradesh",
        "destination_airport": "Chaudhary Charan Singh Airport",
        "date": "2025-03-26",
        "price": 14738
    },
    {
        "source": "Telangana",
        "source_airport": "Rajiv Gandhi International Airport",
        "destination": "Kerala",
        "destination_airport": "Cochin International Airport",
        "date": "2025-04-23",
        "price": 12765
    },
    {
        "source": "Maharashtra",
        "source_airport": "Chhatrapati Shivaji Maharaj International Airport",
        "destination": "Telangana",
        "destination_airport": "Rajiv Gandhi International Airport",
        "date": "2025-04-18",
        "price": 13921
    },
    {
        "source": "Uttarakhand",
        "source_airport": "Jolly Grant Airport",
        "destination": "Assam",
        "destination_airport": "Lokpriya Gopinath Bordoloi International Airport",
        "date": "2025-03-31",
        "price": 12885
    },
    {
        "source": "Mizoram",
        "source_airport": "Lengpui Airport",
        "destination": "Manipur",
        "destination_airport": "Imphal International Airport",
        "date": "2025-04-06",
        "price": 11375
    },
    {
        "source": "Maharashtra",
        "source_airport": "Chhatrapati Shivaji Maharaj International Airport",
        "destination": "Nagaland",
        "destination_airport": "Dimapur Airport",
        "date": "2025-04-16",
        "price": 7816
    },
    {
        "source": "Punjab",
        "source_airport": "Sri Guru Ram Dass Jee International Airport",
        "destination": "Kerala",
        "destination_airport": "Cochin International Airport",
        "date": "2025-03-30",
        "price": 14817
    },
    {
        "source": "Odisha",
        "source_airport": "Biju Patnaik International Airport",
        "destination": "Kerala",
        "destination_airport": "Cochin International Airport",
        "date": "2025-04-19",
        "price": 10045
    },
    {
        "source": "Jharkhand",
        "source_airport": "Birsa Munda Airport",
        "destination": "Rajasthan",
        "destination_airport": "Jaipur International Airport",
        "date": "2025-03-29",
        "price": 6237
    },
    {
        "source": "Bihar",
        "source_airport": "Jay Prakash Narayan International Airport",
        "destination": "Madhya Pradesh",
        "destination_airport": "Devi Ahilya Bai Holkar Airport",
        "date": "2025-04-11",
        "price": 4944
    },
    {
        "source": "Maharashtra",
        "source_airport": "Chhatrapati Shivaji Maharaj International Airport",
        "destination": "Bihar",
        "destination_airport": "Jay Prakash Narayan International Airport",
        "date": "2025-04-12",
        "price": 7449
    },
    {
        "source": "Goa",
        "source_airport": "Dabolim Airport",
        "destination": "Andhra Pradesh",
        "destination_airport": "Visakhapatnam Airport",
        "date": "2025-04-12",
        "price": 4054
    },
    {
        "source": "Tripura",
        "source_airport": "Maharaja Bir Bikram Airport",
        "destination": "Uttarakhand",
        "destination_airport": "Jolly Grant Airport",
        "date": "2025-03-26",
        "price": 5852
    },
    {
        "source": "Madhya Pradesh",
        "source_airport": "Devi Ahilya Bai Holkar Airport",
        "destination": "Tripura",
        "destination_airport": "Maharaja Bir Bikram Airport",
        "date": "2025-04-12",
        "price": 14093
    },
    {
        "source": "Jharkhand",
        "source_airport": "Birsa Munda Airport",
        "destination": "Maharashtra",
        "destination_airport": "Chhatrapati Shivaji Maharaj International Airport",
        "date": "2025-04-18",
        "price": 11258
    },
    {
        "source": "West Bengal",
        "source_airport": "Netaji Subhas Chandra Bose International Airport",
        "destination": "Meghalaya",
        "destination_airport": "Shillong Airport",
        "date": "2025-04-08",
        "price": 4830
    },
    {
        "source": "Meghalaya",
        "source_airport": "Shillong Airport",
        "destination": "Odisha",
        "destination_airport": "Biju Patnaik International Airport",
        "date": "2025-04-08",
        "price": 7721
    },
    {
        "source": "Tamil Nadu",
        "source_airport": "Chennai International Airport",
        "destination": "Bihar",
        "destination_airport": "Jay Prakash Narayan International Airport",
        "date": "2025-04-16",
        "price": 9679
    },
    {
        "source": "Gujarat",
        "source_airport": "Sardar Vallabhbhai Patel International Airport",
        "destination": "Tamil Nadu",
        "destination_airport": "Chennai International Airport",
        "date": "2025-04-16",
        "price": 4257
    },
    {
        "source": "Karnataka",
        "source_airport": "Kempegowda International Airport",
        "destination": "Kerala",
        "destination_airport": "Cochin International Airport",
        "date": "2025-04-09",
        "price": 9256
    },
    {
        "source": "Arunachal Pradesh",
        "source_airport": "Donyi Polo Airport",
        "destination": "Haryana",
        "destination_airport": "Chaudhary Charan Singh Airport",
        "date": "2025-04-06",
        "price": 9886
    },
    {
        "source": "Gujarat",
        "source_airport": "Sardar Vallabhbhai Patel International Airport",
        "destination": "Telangana",
        "destination_airport": "Rajiv Gandhi International Airport",
        "date": "2025-03-26",
        "price": 12845
    },
    {
        "source": "Maharashtra",
        "source_airport": "Chhatrapati Shivaji Maharaj International Airport",
        "destination": "Haryana",
        "destination_airport": "Chaudhary Charan Singh Airport",
        "date": "2025-04-08",
        "price": 5140
    },
    {
        "source": "Gujarat",
        "source_airport": "Sardar Vallabhbhai Patel International Airport",
        "destination": "Rajasthan",
        "destination_airport": "Jaipur International Airport",
        "date": "2025-04-12",
        "price": 5391
    },
    {
        "source": "Andhra Pradesh",
        "source_airport": "Visakhapatnam Airport",
        "destination": "Kerala",
        "destination_airport": "Cochin International Airport",
        "date": "2025-04-15",
        "price": 9154
    },
    {
        "source": "Arunachal Pradesh",
        "source_airport": "Donyi Polo Airport",
        "destination": "Meghalaya",
        "destination_airport": "Shillong Airport",
        "date": "2025-04-08",
        "price": 4250
    },
    {
        "source": "Tamil Nadu",
        "source_airport": "Chennai International Airport",
        "destination": "Kerala",
        "destination_airport": "Cochin International Airport",
        "date": "2025-04-13",
        "price": 6079
    },
    {
        "source": "Madhya Pradesh",
        "source_airport": "Devi Ahilya Bai Holkar Airport",
        "destination": "Mizoram",
        "destination_airport": "Lengpui Airport",
        "date": "2025-04-10",
        "price": 4633
    },
    {
        "source": "Tripura",
        "source_airport": "Maharaja Bir Bikram Airport",
        "destination": "Meghalaya",
        "destination_airport": "Shillong Airport",
        "date": "2025-03-28",
        "price": 5180
    },
    {
        "source": "Mizoram",
        "source_airport": "Lengpui Airport",
        "destination": "Bihar",
        "destination_airport": "Jay Prakash Narayan International Airport",
        "date": "2025-04-11",
        "price": 14342
    },
    {
        "source": "Tamil Nadu",
        "source_airport": "Chennai International Airport",
        "destination": "Gujarat",
        "destination_airport": "Sardar Vallabhbhai Patel International Airport",
        "date": "2025-04-22",
        "price": 9207
    },
    {
        "source": "Himachal Pradesh",
        "source_airport": "Kangra Airport",
        "destination": "Kerala",
        "destination_airport": "Cochin International Airport",
        "date": "2025-03-30",
        "price": 7223
    },
    {
        "source": "Maharashtra",
        "source_airport": "Chhatrapati Shivaji Maharaj International Airport",
        "destination": "Tamil Nadu",
        "destination_airport": "Chennai International Airport",
        "date": "2025-04-23",
        "price": 14856
    },
    {
        "source": "Madhya Pradesh",
        "source_airport": "Devi Ahilya Bai Holkar Airport",
        "destination": "Maharashtra",
        "destination_airport": "Chhatrapati Shivaji Maharaj International Airport",
        "date": "2025-04-11",
        "price": 4339
    },
    {
        "source": "Goa",
        "source_airport": "Dabolim Airport",
        "destination": "Maharashtra",
        "destination_airport": "Chhatrapati Shivaji Maharaj International Airport",
        "date": "2025-03-25",
        "price": 7886
    },
    {
        "source": "Odisha",
        "source_airport": "Biju Patnaik International Airport",
        "destination": "Uttarakhand",
        "destination_airport": "Jolly Grant Airport",
        "date": "2025-04-10",
        "price": 11559
    },
    {
        "source": "Haryana",
        "source_airport": "Chaudhary Charan Singh Airport",
        "destination": "Gujarat",
        "destination_airport": "Sardar Vallabhbhai Patel International Airport",
        "date": "2025-04-01",
        "price": 13089
    },
    {
        "source": "Jharkhand",
        "source_airport": "Birsa Munda Airport",
        "destination": "Bihar",
        "destination_airport": "Jay Prakash Narayan International Airport",
        "date": "2025-04-21",
        "price": 14949
    },
    {
        "source": "Nagaland",
        "source_airport": "Dimapur Airport",
        "destination": "Odisha",
        "destination_airport": "Biju Patnaik International Airport",
        "date": "2025-03-29",
        "price": 9695
    },
    {
        "source": "Tripura",
        "source_airport": "Maharaja Bir Bikram Airport",
        "destination": "Tamil Nadu",
        "destination_airport": "Chennai International Airport",
        "date": "2025-03-31",
        "price": 13415
    },
    {
        "source": "Assam",
        "source_airport": "Lokpriya Gopinath Bordoloi International Airport",
        "destination": "Gujarat",
        "destination_airport": "Sardar Vallabhbhai Patel International Airport",
        "date": "2025-04-23",
        "price": 4081
    },
    {
        "source": "Sikkim",
        "source_airport": "Pakyong Airport",
        "destination": "Karnataka",
        "destination_airport": "Kempegowda International Airport",
        "date": "2025-03-27",
        "price": 8478
    },
    {
        "source": "Arunachal Pradesh",
        "source_airport": "Donyi Polo Airport",
        "destination": "Kerala",
        "destination_airport": "Cochin International Airport",
        "date": "2025-04-03",
        "price": 13916
    },
    {
        "source": "Meghalaya",
        "source_airport": "Shillong Airport",
        "destination": "Telangana",
        "destination_airport": "Rajiv Gandhi International Airport",
        "date": "2025-04-20",
        "price": 11851
    },
    {
        "source": "Goa",
        "source_airport": "Dabolim Airport",
        "destination": "Arunachal Pradesh",
        "destination_airport": "Donyi Polo Airport",
        "date": "2025-04-04",
        "price": 11947
    },
    {
        "source": "Haryana",
        "source_airport": "Chaudhary Charan Singh Airport",
        "destination": "Madhya Pradesh",
        "destination_airport": "Devi Ahilya Bai Holkar Airport",
        "date": "2025-04-06",
        "price": 3730
    },
    {
        "source": "Uttarakhand",
        "source_airport": "Jolly Grant Airport",
        "destination": "Rajasthan",
        "destination_airport": "Jaipur International Airport",
        "date": "2025-04-13",
        "price": 4377
    },
    {
        "source": "Chhattisgarh",
        "source_airport": "Swami Vivekananda Airport",
        "destination": "Andhra Pradesh",
        "destination_airport": "Visakhapatnam Airport",
        "date": "2025-04-20",
        "price": 10263
    },
    {
        "source": "Kerala",
        "source_airport": "Cochin International Airport",
        "destination": "Manipur",
        "destination_airport": "Imphal International Airport",
        "date": "2025-04-05",
        "price": 9644
    },
    {
        "source": "Odisha",
        "source_airport": "Biju Patnaik International Airport",
        "destination": "Andhra Pradesh",
        "destination_airport": "Visakhapatnam Airport",
        "date": "2025-04-09",
        "price": 7157
    },
    {
        "source": "Uttar Pradesh",
        "source_airport": "Chaudhary Charan Singh Airport",
        "destination": "Tamil Nadu",
        "destination_airport": "Chennai International Airport",
        "date": "2025-03-28",
        "price": 6775
    },
    {
        "source": "Jharkhand",
        "source_airport": "Birsa Munda Airport",
        "destination": "Sikkim",
        "destination_airport": "Pakyong Airport",
        "date": "2025-03-31",
        "price": 7886
    },
    {
        "source": "Uttarakhand",
        "source_airport": "Jolly Grant Airport",
        "destination": "West Bengal",
        "destination_airport": "Netaji Subhas Chandra Bose International Airport",
        "date": "2025-04-15",
        "price": 5220
    },
    {
        "source": "Arunachal Pradesh",
        "source_airport": "Donyi Polo Airport",
        "destination": "Chhattisgarh",
        "destination_airport": "Swami Vivekananda Airport",
        "date": "2025-04-13",
        "price": 5887
    }
]