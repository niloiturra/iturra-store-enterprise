FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["src/ApiGateway/Compras/ISE.Bff.Compras/ISE.Bff.Compras.csproj", "ISE.Bff.Compras/"]
RUN dotnet restore "src/ApiGateway/Compras/ISE.Bff.Compras/ISE.Bff.Compras.csproj"
COPY . .
WORKDIR "/src/ISE.Bff.Compras"
RUN dotnet build "ISE.Bff.Compras.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ISE.Bff.Compras.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ISE.Bff.Compras.dll"]
