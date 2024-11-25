<x-mail::message>
# Hello Dear {{$name}},
Thank you for creating an account from IMS, you can now access your shop andinventory now.
<x-mail::panel>
Registered Name: <strong>{{$name}} </strong> <br>
Registered Email: <strong>{{$email}}</strong> <br>
Shop Name: <strong>{{$shopName}}</strong> <br>
Shop Location: <strong>{{$shop_address}}</strong> <br>
Shop Domain: <a href="http://{{$domain}}.localhost:8000/">http://{{$domain}}.localhost:8000/</a> <br>
</x-mail::panel>
<x-mail::panel>
Remember the above shop domain s very important because it is unique for yourshop, remmebr it or write it
somewhere safe for future use, or save this email to keep your domain safe.
</x-mail::panel>
<x-mail::button :url="'http://{{$domain}}.localhost:8000/'" color="success">
Login your shop here
</x-mail::button>
Thanks,<br>
Joshua Jayrous, CEO <br>
{{ config('app.name') }}
</x-mail::message>